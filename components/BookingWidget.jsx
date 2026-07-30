'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const SHORT_MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const WEEKDAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

const pad = (n) => String(n).padStart(2, '0');

const startOfToday = () => {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
};

const addDays = (date, days) => {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
};

const formatDisplay = (date) =>
  date ? `${pad(date.getDate())} ${SHORT_MONTHS[date.getMonth()]} ${date.getFullYear()}` : 'Select date';

const formatISO = (date) => (date ? `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}` : null);

const sameDay = (a, b) =>
  !!a && !!b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();

const CalendarIcon = () => (
  <svg className="booking-date-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

function Calendar({ field, view, onNav, onSelect, isDisabled, isSelected, isInRange, today }) {
  const { month, year } = view;
  const firstDay = new Date(year, month, 1).getDay();
  const startOffset = firstDay === 0 ? 6 : firstDay - 1;
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells = [];
  for (let i = 0; i < startOffset; i += 1) {
    cells.push(<div className="booking-calendar-day empty" key={`empty-${i}`} />);
  }
  for (let d = 1; d <= daysInMonth; d += 1) {
    const date = new Date(year, month, d);
    const disabled = isDisabled(date);
    const classes = ['booking-calendar-day'];
    if (sameDay(date, today)) classes.push('today');
    if (disabled) classes.push('disabled');
    if (isSelected(date)) classes.push('selected');
    if (!disabled && isInRange(date)) classes.push('in-range');

    cells.push(
      <div
        key={d}
        className={classes.join(' ')}
        onClick={() => {
          if (!disabled) onSelect(date);
        }}
      >
        {d}
      </div>
    );
  }

  return (
    <div className="booking-calendar active">
      <div className="booking-calendar-header">
        <button type="button" className="booking-calendar-nav" onClick={() => onNav(field, -1)}>
          ‹
        </button>
        <span className="booking-calendar-title">
          {MONTH_NAMES[month]} {year}
        </span>
        <button type="button" className="booking-calendar-nav" onClick={() => onNav(field, 1)}>
          ›
        </button>
      </div>
      <div className="booking-calendar-weekdays">
        {WEEKDAYS.map((d) => (
          <span key={d}>{d}</span>
        ))}
      </div>
      <div className="booking-calendar-days">{cells}</div>
    </div>
  );
}

export default function BookingWidget() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [childAges, setChildAges] = useState([]);
  const [openCalendar, setOpenCalendar] = useState(null);
  const [checkin, setCheckin] = useState(null);
  const [checkout, setCheckout] = useState(null);
  const [view, setView] = useState({ checkin: null, checkout: null });
  const datesRef = useRef(null);

  const today = useMemo(() => (mounted ? startOfToday() : null), [mounted]);

  useEffect(() => {
    const base = startOfToday();
    const firstNight = addDays(base, 1);
    const lastNight = addDays(base, 3);
    setCheckin(firstNight);
    setCheckout(lastNight);
    setView({
      checkin: { month: firstNight.getMonth(), year: firstNight.getFullYear() },
      checkout: { month: lastNight.getMonth(), year: lastNight.getFullYear() },
    });
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== 'Escape') return;
      if (openCalendar) setOpenCalendar(null);
      else if (open) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, openCalendar]);

  useEffect(() => {
    if (!openCalendar) return undefined;
    const onClick = (e) => {
      if (datesRef.current && !datesRef.current.contains(e.target)) setOpenCalendar(null);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, [openCalendar]);

  const setChildCount = (next) => {
    const count = Math.min(Math.max(next, 0), 10);
    setChildren(count);
    setChildAges((prev) => Array.from({ length: count }, (_, i) => prev[i] ?? '1'));
  };

  const handleNav = useCallback((field, dir) => {
    setView((prev) => {
      const current = prev[field];
      let month = current.month + dir;
      let { year } = current;
      if (month > 11) {
        month = 0;
        year += 1;
      } else if (month < 0) {
        month = 11;
        year -= 1;
      }
      return { ...prev, [field]: { month, year } };
    });
  }, []);

  const handleTriggerClick = (field) => {
    if (openCalendar === field) {
      setOpenCalendar(null);
      return;
    }
    const anchor = field === 'checkin' ? checkin : checkout;
    if (anchor) {
      setView((prev) => ({ ...prev, [field]: { month: anchor.getMonth(), year: anchor.getFullYear() } }));
    }
    setOpenCalendar(field);
  };

  const selectDate = (field, date) => {
    if (field === 'checkin') {
      setCheckin(date);
      let nextCheckout = addDays(date, 2);
      if (nextCheckout <= date) nextCheckout = addDays(date, 1);
      setCheckout(nextCheckout);
      setView((prev) => ({
        ...prev,
        checkout: { month: nextCheckout.getMonth(), year: nextCheckout.getFullYear() },
      }));
      setOpenCalendar(null);
      setTimeout(() => setOpenCalendar('checkout'), 280);
    } else {
      setCheckout(date);
      setOpenCalendar(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkinDate = formatISO(checkin);
    const checkoutDate = formatISO(checkout);
    if (!checkinDate) {
      setOpenCalendar('checkin');
      return;
    }
    if (!checkoutDate) {
      setOpenCalendar('checkout');
      return;
    }
    const totalGuests = adults + children;
    const ages = childAges.join(',');
    const url = `https://book.kayagnhlondon.com/bv3/search?search={"checkin_date":"${checkinDate}","checkout_date":"${checkoutDate}","room_count":1,"total_adult":${adults},"total_child":${children},"rooms":[{"adult_count":"${adults}","guest_count":${totalGuests},"child_count":"${children}","child_ages":[${ages}]}]}`;
    window.open(url, '_blank');
  };

  if (!mounted) return null;

  return createPortal(
    <>
      <button className="book-now-btn" id="bookNowBtn" aria-label="Book Now" type="button" onClick={() => setOpen(true)}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
        <span>Book Now</span>
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>

      <div className={`booking-popup${open ? ' active' : ''}`} id="bookingPopup">
        <div className="booking-popup-overlay" onClick={() => setOpen(false)} />
        <div className="booking-popup-content">
          <button className="booking-popup-close" aria-label="Close booking form" type="button" onClick={() => setOpen(false)}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          <div className="booking-popup-inner">
            <div className="booking-popup-image" />
            <div className="booking-popup-form-wrap">
              <div className="booking-popup-form-header">
                <h3 className="booking-popup-form-title">Book Your Stay</h3>
                <p className="booking-popup-form-subtitle">Experience the original railway hotel</p>
              </div>
              <form className="booking-form" onSubmit={handleSubmit} noValidate>
                <div className="booking-form-row" ref={datesRef}>
                  <div className="booking-form-group booking-date-field">
                    <label className="booking-form-label">Check-In</label>
                    <div
                      className={`booking-date-trigger${openCalendar === 'checkin' ? ' active' : ''}`}
                      onClick={() => handleTriggerClick('checkin')}
                    >
                      <span className={`booking-date-value${checkin ? '' : ' placeholder'}`}>{formatDisplay(checkin)}</span>
                      <CalendarIcon />
                    </div>
                    {openCalendar === 'checkin' && (
                      <Calendar
                        field="checkin"
                        view={view.checkin}
                        today={today}
                        onNav={handleNav}
                        onSelect={(date) => selectDate('checkin', date)}
                        isDisabled={(date) => date <= today}
                        isSelected={(date) => sameDay(date, checkin)}
                        isInRange={() => false}
                      />
                    )}
                  </div>
                  <div className="booking-form-group booking-date-field">
                    <label className="booking-form-label">Check-Out</label>
                    <div
                      className={`booking-date-trigger${openCalendar === 'checkout' ? ' active' : ''}`}
                      onClick={() => handleTriggerClick('checkout')}
                    >
                      <span className={`booking-date-value${checkout ? '' : ' placeholder'}`}>{formatDisplay(checkout)}</span>
                      <CalendarIcon />
                    </div>
                    {openCalendar === 'checkout' && (
                      <Calendar
                        field="checkout"
                        view={view.checkout}
                        today={today}
                        onNav={handleNav}
                        onSelect={(date) => selectDate('checkout', date)}
                        isDisabled={(date) => date <= (checkin || today)}
                        isSelected={(date) => sameDay(date, checkout)}
                        isInRange={(date) => !!checkin && !!checkout && date > checkin && date < checkout}
                      />
                    )}
                  </div>
                </div>

                <div className="booking-form-row">
                  <div className="booking-form-group">
                    <label className="booking-form-label">Adults</label>
                    <div className="booking-stepper">
                      <button type="button" className="booking-stepper-btn" onClick={() => setAdults(Math.max(1, adults - 1))}>
                        −
                      </button>
                      <span className="booking-stepper-value">{adults}</span>
                      <button type="button" className="booking-stepper-btn" onClick={() => setAdults(Math.min(10, adults + 1))}>
                        +
                      </button>
                    </div>
                  </div>
                  <div className="booking-form-group">
                    <label className="booking-form-label">Children</label>
                    <div className="booking-stepper">
                      <button type="button" className="booking-stepper-btn" onClick={() => setChildCount(children - 1)}>
                        −
                      </button>
                      <span className="booking-stepper-value">{children}</span>
                      <button type="button" className="booking-stepper-btn" onClick={() => setChildCount(children + 1)}>
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="booking-child-ages">
                  {childAges.map((age, index) => (
                    <div className="booking-child-age-row" key={`child-${index}`}>
                      <span className="booking-child-age-label">Child {index + 1} Age</span>
                      <select
                        value={age}
                        onChange={(e) => {
                          const value = e.target.value;
                          setChildAges((prev) => prev.map((item, i) => (i === index ? value : item)));
                        }}
                      >
                        {Array.from({ length: 11 }, (_, j) => (
                          <option key={j + 1} value={String(j + 1)}>
                            {j + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                  ))}
                </div>

                <div className="booking-kaya-club">
                  <div className="booking-kaya-club-icon">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <span className="booking-kaya-club-text">
                    Enjoy <strong>5% discount</strong>, <strong>3% MoneyPoints</strong> and many more privileges by becoming a{' '}
                    <strong>KAYA CLUB</strong> member during booking!
                  </span>
                </div>

                <button type="submit" className="booking-form-submit">
                  <span>Book Now</span>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.body
  );
}
