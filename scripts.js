/* ============================================ */
/* KAYA GREAT NORTHERN HOTEL - MAIN JAVASCRIPT   */
/* ============================================ */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // PRELOADER
    // ==========================================
    const preloader = document.getElementById('preloader');
    if (preloader) {
        const hidePreloader = () => {
            if (!preloader.classList.contains('hidden')) {
                preloader.classList.add('hidden');
                document.body.style.overflow = '';
            }
        };

        // Hide after load event
        window.addEventListener('load', () => {
            setTimeout(hidePreloader, 300);
        });

        // Force hide after 2.5s regardless of load state
        setTimeout(hidePreloader, 2500);

        // If page already fully loaded, hide immediately
        if (document.readyState === 'complete') {
            setTimeout(hidePreloader, 100);
        }

        document.body.style.overflow = 'hidden';
    }


    // ==========================================
    // FULL-SCREEN OVERLAY MENU
    // ==========================================
    const menuOverlay = document.getElementById('menuOverlay');
    const navToggle = document.getElementById('navToggle');
    const menuCloseBtn = document.getElementById('menuCloseBtn');
    const menuLinks = document.querySelectorAll('.menu-link');
    const navbar = document.getElementById('navbar');
    const navLogoImg = document.querySelector('.nav-logo-img');

    const openMenu = () => {
        menuOverlay.classList.add('active');
        navbar.classList.add('menu-open');
        navToggle.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    };

    const closeMenu = () => {
        menuOverlay.classList.remove('active');
        navbar.classList.remove('menu-open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    };

    if (navToggle && menuOverlay) {
        navToggle.addEventListener('click', openMenu);
    }

    if (menuCloseBtn && menuOverlay) {
        menuCloseBtn.addEventListener('click', closeMenu);
    }

    // Close menu on link click
    menuLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && menuOverlay && menuOverlay.classList.contains('active')) {
            closeMenu();
        }
    });


    // ==========================================
    // NAVBAR SCROLL BEHAVIOR
    // ==========================================
    let lastScroll = 0;

    const handleNavScroll = () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Only hide navbar on scroll down when menu is NOT open
        if (!menuOverlay.classList.contains('active')) {
            if (currentScroll > lastScroll && currentScroll > 300) {
                navbar.classList.add('hidden');
            } else {
                navbar.classList.remove('hidden');
            }
        }

        lastScroll = currentScroll;
    };

    let scrollTicking = false;
    window.addEventListener('scroll', () => {
        if (!scrollTicking) {
            window.requestAnimationFrame(() => {
                handleNavScroll();
                scrollTicking = false;
            });
            scrollTicking = true;
        }
    });


    // ==========================================
    // HERO SLIDER
    // ==========================================
    let heroCurrentSlide = 0;
    const heroSlides = document.querySelectorAll('.hero-slide');
    const indicators = document.querySelectorAll('.indicator');
    const heroPrev = document.getElementById('heroPrev');
    const heroNext = document.getElementById('heroNext');

    const goToSlide = (index) => {
        heroSlides.forEach(s => s.classList.remove('active'));
        indicators.forEach(i => {
            i.classList.remove('active');
            i.setAttribute('aria-selected', 'false');
        });

        heroCurrentSlide = (index + heroSlides.length) % heroSlides.length;

        heroSlides[heroCurrentSlide].classList.add('active');
        indicators[heroCurrentSlide].classList.add('active');
        indicators[heroCurrentSlide].setAttribute('aria-selected', 'true');
    };

    const nextSlide = () => goToSlide(heroCurrentSlide + 1);
    const prevSlide = () => goToSlide(heroCurrentSlide - 1);

    if (heroSlides.length > 1) {
        // Indicator clicks
        indicators.forEach(indicator => {
            indicator.addEventListener('click', () => {
                const index = parseInt(indicator.getAttribute('data-index'));
                goToSlide(index);
            });
        });

        // Arrow clicks
        if (heroPrev) {
            heroPrev.addEventListener('click', prevSlide);
        }
        if (heroNext) {
            heroNext.addEventListener('click', nextSlide);
        }
    }

    // Lazy load non-video backgrounds
    heroSlides.forEach((slide) => {
        if (!slide.classList.contains('video-slide')) {
            const bg = slide.getAttribute('data-bg');
            if (bg) {
                const img = new Image();
                img.onload = () => { slide.style.backgroundImage = `url(${bg})`; };
                img.src = bg;
            }
        }
    });


    // ==========================================
    // VIDEO HERO — Persistent Autoplay Background
    // ==========================================
    const heroVideo = document.getElementById('heroVideo');
    const videoPoster = document.getElementById('heroVideoPoster');

    if (heroVideo) {
        // Start loading video immediately in background
        heroVideo.preload = 'auto';
        heroVideo.load();

        const startVideo = () => {
            heroVideo.play().then(() => {
                heroVideo.classList.add('playing');
                if (videoPoster) videoPoster.classList.add('hidden');
            }).catch(() => {
                // Autoplay blocked — retry on first user interaction
                const retry = () => {
                    heroVideo.play().then(() => {
                        heroVideo.classList.add('playing');
                        if (videoPoster) videoPoster.classList.add('hidden');
                    }).catch(() => {});
                    document.removeEventListener('click', retry);
                    document.removeEventListener('touchstart', retry);
                };
                document.addEventListener('click', retry, { once: true });
                document.addEventListener('touchstart', retry, { once: true });
                // Retry after delay
                setTimeout(retry, 2000);
            });
        };

        // Start as soon as we have enough data buffered
        if (heroVideo.readyState >= 2) {
            startVideo();
        } else {
            heroVideo.addEventListener('canplay', startVideo, { once: true });
            // Fallback: try after 3s
            setTimeout(startVideo, 3000);
        }

        // Error handling: just hide poster
        heroVideo.addEventListener('error', () => {
            if (videoPoster) videoPoster.classList.add('hidden');
        });

        // No 'ended' listener needed — video has 'loop' attribute
    }


    // ==========================================
    // TESTIMONIAL SLIDER
    // ==========================================
    const testimonialTrack = document.getElementById('testimonialTrack');
    const testDots = document.querySelectorAll('#testDots .dot');
    const testPrev = document.getElementById('testPrev');
    const testNext = document.getElementById('testNext');

    if (testimonialTrack && testDots.length > 0) {
        let testCurrent = 0;
        const totalTests = testimonialTrack.querySelectorAll('.testimonial-card').length;

        const updateTestimonial = (index) => {
            testCurrent = (index + totalTests) % totalTests;
            testimonialTrack.style.transform = `translateX(-${testCurrent * 100}%)`;
            testDots.forEach(d => d.classList.remove('active'));
            testDots[testCurrent].classList.add('active');
        };

        testDots.forEach(dot => {
            dot.addEventListener('click', () => {
                updateTestimonial(parseInt(dot.getAttribute('data-index')));
            });
        });

        if (testPrev) testPrev.addEventListener('click', () => updateTestimonial(testCurrent - 1));
        if (testNext) testNext.addEventListener('click', () => updateTestimonial(testCurrent + 1));

        let testInterval = setInterval(() => updateTestimonial(testCurrent + 1), 5000);

        const testimonialSection = document.querySelector('.testimonials');
        if (testimonialSection) {
            testimonialSection.addEventListener('mouseenter', () => clearInterval(testInterval));
            testimonialSection.addEventListener('mouseleave', () => {
                testInterval = setInterval(() => updateTestimonial(testCurrent + 1), 5000);
            });
        }

        // Touch support
        let touchStartX = 0;
        testimonialTrack.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
            clearInterval(testInterval);
        }, { passive: true });

        testimonialTrack.addEventListener('touchend', (e) => {
            const touchEndX = e.changedTouches[0].screenX;
            const diff = touchStartX - touchEndX;
            if (Math.abs(diff) > 50) {
                updateTestimonial(diff > 0 ? testCurrent + 1 : testCurrent - 1);
            }
            testInterval = setInterval(() => updateTestimonial(testCurrent + 1), 5000);
        }, { passive: true });
    }


    // ==========================================
    // REVEAL ON SCROLL
    // ==========================================
    const revealElements = document.querySelectorAll('.reveal');

    if (revealElements.length > 0) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        revealElements.forEach(el => revealObserver.observe(el));
    }


    // ==========================================
    // PARALLAX - Pure CSS (background-attachment: fixed)
    // ==========================================
    // JS transform removed to avoid conflict with background-attachment: fixed


    // ==========================================
    // SMOOTH SCROLL FOR ANCHORS
    // ==========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const targetId = anchor.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const navHeight = navbar ? navbar.offsetHeight : 80;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }
        });
    });


    // ==========================================
    // BADGE COUNTER (1854)
    // ==========================================
    const badgeYear = document.querySelector('.badge-year');
    if (badgeYear) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    let current = 1800;
                    const target = 1854;
                    const increment = Math.ceil((target - current) / 30);
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            current = target;
                            clearInterval(timer);
                        }
                        badgeYear.textContent = current;
                    }, 40);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        counterObserver.observe(badgeYear);
    }


    // ==========================================
    // NEWSLETTER FORM
    // ==========================================
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = newsletterForm.querySelector('.newsletter-input');
            const email = input.value.trim();

            if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                const original = newsletterForm.innerHTML;
                newsletterForm.innerHTML = `
                    <div style="padding: 16px; background: rgba(196, 163, 90, 0.1); border: 1px solid #C4A35A; text-align: center;">
                        <p style="color: #C4A35A; font-size: 0.9rem; margin: 0;">Thank you for subscribing!</p>
                    </div>
                `;
                setTimeout(() => { newsletterForm.innerHTML = original; }, 3000);
            } else {
                input.style.borderColor = '#e74c3c';
                input.focus();
                setTimeout(() => { input.style.borderColor = ''; }, 2000);
            }
        });
    }


    // ==========================================
    // ACTIVE NAV LINK HIGHLIGHT
    // ==========================================
    const sections = document.querySelectorAll('section[id]');

    if (sections.length > 0) {
        const handleActiveNav = () => {
            let current = '';
            const scrollPos = window.pageYOffset + 150;

            sections.forEach(section => {
                const top = section.offsetTop;
                const height = section.offsetHeight;
                if (scrollPos >= top && scrollPos < top + height) {
                    current = section.getAttribute('id');
                }
            });

            menuLinks.forEach(link => {
                link.classList.remove('active');
                const href = link.getAttribute('href');
                if (href && href.includes(current) && current) {
                    link.classList.add('active');
                }
            });
        };

        let navTick = false;
        window.addEventListener('scroll', () => {
            if (!navTick) {
                window.requestAnimationFrame(() => {
                    handleActiveNav();
                    navTick = false;
                });
                navTick = true;
            }
        });
    }


    // ==========================================
    // MENU KEYBOARD NAV
    // ==========================================
    const menuList = document.querySelector('.menu-list');
    if (menuList) {
        menuList.addEventListener('keydown', (e) => {
            const items = [...menuList.querySelectorAll('.menu-link')];
            const currentIndex = items.indexOf(document.activeElement);

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                const next = (currentIndex + 1) % items.length;
                items[next].focus();
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                const prev = (currentIndex - 1 + items.length) % items.length;
                items[prev].focus();
            }
        });
    }


    // ==========================================
    // ROOMS EXPANDABLE - TOUCH SUPPORT
    // ==========================================
    const roomItems = document.querySelectorAll('.room-expandable');

    roomItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // Only toggle on mobile/tablet where hover doesn't work
            if (window.innerWidth <= 1024) {
                const isExpanded = this.classList.contains('expanded');

                // Collapse all first
                roomItems.forEach(r => r.classList.remove('expanded'));

                // Toggle current
                if (!isExpanded) {
                    this.classList.add('expanded');
                }
            }
        });

        // Remove expanded state on mouseleave for tablets
        item.addEventListener('mouseleave', function() {
            if (window.innerWidth <= 1024) {
                roomItems.forEach(r => r.classList.remove('expanded'));
            }
        });
    });


    // ==========================================
    // BOOKING POPUP
    // ==========================================
    const bookNowBtn = document.getElementById('bookNowBtn');
    const bookingPopup = document.getElementById('bookingPopup');
    const bookingOverlay = document.getElementById('bookingPopupOverlay');
    const bookingClose = document.getElementById('bookingPopupClose');
    const bookingChildAges = document.getElementById('bookingChildAges');
    const bookingForm = document.getElementById('bookingForm');

    // ==========================================
    // CUSTOM CALENDAR WIDGET
    // ==========================================
    
    // --- STATE ---
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Default: checkin = today+1, checkout = today+3
    const defaultCheckin = new Date(today);
    defaultCheckin.setDate(defaultCheckin.getDate() + 1);
    const defaultCheckout = new Date(today);
    defaultCheckout.setDate(defaultCheckout.getDate() + 3);

    // Store selected dates (Date objects or null)
    let selectedCheckin = new Date(defaultCheckin);
    let selectedCheckout = new Date(defaultCheckout);

    // Current calendar view state (which month/year each calendar shows)
    let calendarView = {
        checkin: { month: defaultCheckin.getMonth(), year: defaultCheckin.getFullYear() },
        checkout: { month: defaultCheckout.getMonth(), year: defaultCheckout.getFullYear() }
    };

    // DOM refs
    const checkinTrigger = document.getElementById('checkinTrigger');
    const checkoutTrigger = document.getElementById('checkoutTrigger');
    const checkinDisplay = document.getElementById('checkinDisplay');
    const checkoutDisplay = document.getElementById('checkoutDisplay');
    const checkinCalendar = document.getElementById('checkinCalendar');
    const checkoutCalendar = document.getElementById('checkoutCalendar');

    const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const WEEKDAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

    const pad = (n) => String(n).padStart(2, '0');

    const formatDateDisplay = (date) => {
        if (!date) return 'Select date';
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return `${pad(date.getDate())} ${months[date.getMonth()]} ${date.getFullYear()}`;
    };

    const formatDateISO = (date) => {
        if (!date) return null;
        return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
    };

    // --- BUILD CALENDAR HTML ---
    const buildCalendar = (field) => {
        const isCheckin = field === 'checkin';
        const calEl = isCheckin ? checkinCalendar : checkoutCalendar;
        const view = calendarView[field];
        const month = view.month;
        const year = view.year;

        // First day of month (0=Sun, 1=Mon, ...)
        const firstDay = new Date(year, month, 1).getDay();
        // Shift so Monday = 0
        const startOffset = firstDay === 0 ? 6 : firstDay - 1;

        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const daysInPrevMonth = new Date(year, month, 0).getDate();

        let html = '';

        // Header
        html += '<div class="booking-calendar-header">';
        html += `<button class="booking-calendar-nav" data-calendar-nav="${field}" data-dir="prev">‹</button>`;
        html += `<span class="booking-calendar-title">${MONTH_NAMES[month]} ${year}</span>`;
        html += `<button class="booking-calendar-nav" data-calendar-nav="${field}" data-dir="next">›</button>`;
        html += '</div>';

        // Weekdays
        html += '<div class="booking-calendar-weekdays">';
        WEEKDAYS.forEach(d => { html += `<span>${d}</span>`; });
        html += '</div>';

        // Days
        html += '<div class="booking-calendar-days">';

        // Empty cells before first day
        for (let i = 0; i < startOffset; i++) {
            html += '<div class="booking-calendar-day empty"></div>';
        }

        // Days of month
        for (let d = 1; d <= daysInMonth; d++) {
            const date = new Date(year, month, d);
            const dateTime = date.getTime();

            let classes = 'booking-calendar-day';

            // Check if this is today
            if (date.getFullYear() === today.getFullYear() && date.getMonth() === today.getMonth() && date.getDate() === today.getDate()) {
                classes += ' today';
            }

            // Disable past dates
            let isDisabled = false;
            if (isCheckin) {
                // For check-in: disable today and earlier (can't check in today or past)
                isDisabled = date <= today;
            } else {
                // For check-out: disable if <= checkin date
                if (selectedCheckin) {
                    isDisabled = date <= selectedCheckin;
                } else {
                    isDisabled = date <= today;
                }
            }

            if (isDisabled) {
                classes += ' disabled';
            }

            // Selected check-in
            if (selectedCheckin && date.getTime() === selectedCheckin.getTime()) {
                classes += ' selected';
            }

            // Selected check-out
            if (!isCheckin && selectedCheckout && date.getTime() === selectedCheckout.getTime()) {
                classes += ' selected';
            }

            // Range highlight: days between checkin and checkout
            if (selectedCheckin && selectedCheckout && !isCheckin) {
                if (date > selectedCheckin && date < selectedCheckout && !isDisabled) {
                    classes += ' in-range';
                }
            }

            const dataAttrs = `data-calendar-day="${field}" data-date="${dateTime}"`;

            html += `<div class="${classes}" ${dataAttrs}>${d}</div>`;
        }

        html += '</div>';

        calEl.innerHTML = html;
    };

    // --- OPEN / CLOSE CALENDAR ---
    const closeAllCalendars = () => {
        checkinCalendar.classList.remove('active');
        checkoutCalendar.classList.remove('active');
        checkinTrigger.classList.remove('active');
        checkoutTrigger.classList.remove('active');
    };

    const openCalendar = (field) => {
        closeAllCalendars();
        const calEl = field === 'checkin' ? checkinCalendar : checkoutCalendar;
        const trigger = field === 'checkin' ? checkinTrigger : checkoutTrigger;
        buildCalendar(field);
        calEl.classList.add('active');
        trigger.classList.add('active');
    };

    // --- SELECT DATE ---
    const selectDate = (field, date) => {
        if (field === 'checkin') {
            selectedCheckin = new Date(date);
            checkinDisplay.textContent = formatDateDisplay(selectedCheckin);
            checkinDisplay.classList.remove('placeholder');

            // Auto-set checkout: selectedCheckin + 2
            let newCheckout = new Date(selectedCheckin);
            newCheckout.setDate(newCheckout.getDate() + 2);
            
            // Ensure checkout is after checkin
            if (newCheckout <= selectedCheckin) {
                newCheckout = new Date(selectedCheckin);
                newCheckout.setDate(newCheckout.getDate() + 1);
            }

            selectedCheckout = newCheckout;
            checkoutDisplay.textContent = formatDateDisplay(selectedCheckout);
            checkoutDisplay.classList.remove('placeholder');

            // Update checkout calendar view to new checkout month
            calendarView.checkout.month = selectedCheckout.getMonth();
            calendarView.checkout.year = selectedCheckout.getFullYear();

            // Auto-close checkin, open checkout with delay
            setTimeout(() => {
                openCalendar('checkout');
            }, 280);
        } else {
            selectedCheckout = new Date(date);
            checkoutDisplay.textContent = formatDateDisplay(selectedCheckout);
            checkoutDisplay.classList.remove('placeholder');
            closeAllCalendars();
        }
    };

    // --- EVENTS ---
    // Click on trigger to open calendar
    if (checkinTrigger) {
        checkinTrigger.addEventListener('click', (e) => {
            e.stopPropagation();
            if (checkinCalendar.classList.contains('active')) {
                closeAllCalendars();
            } else {
                openCalendar('checkin');
            }
        });
    }

    if (checkoutTrigger) {
        checkoutTrigger.addEventListener('click', (e) => {
            e.stopPropagation();
            // Require checkin first
            if (!selectedCheckin) {
                checkinTrigger.style.borderColor = 'var(--color-gold)';
                setTimeout(() => {
                    checkinTrigger.style.borderColor = '';
                }, 1500);
                return;
            }
            if (checkoutCalendar.classList.contains('active')) {
                closeAllCalendars();
            } else {
                openCalendar('checkout');
            }
        });
    }

    // Consolidated click handler
    document.addEventListener('click', (e) => {
        // First check if click is within the calendar system
        const isCalendarArea = e.target.closest('.booking-calendar, .booking-date-trigger, .booking-date-field');

        // --- Calendar navigation (must check BEFORE innerHTML replacement) ---
        const navBtn = e.target.closest('[data-calendar-nav]');
        if (navBtn) {
            e.stopPropagation();
            const field = navBtn.dataset.calendarNav;
            const dir = navBtn.dataset.dir;
            const view = calendarView[field];
            if (dir === 'next') {
                view.month++;
                if (view.month > 11) { view.month = 0; view.year++; }
            } else {
                view.month--;
                if (view.month < 0) { view.month = 11; view.year--; }
            }
            buildCalendar(field);
            return;
        }

        // --- Day selection ---
        const dayEl = e.target.closest('[data-calendar-day]');
        if (dayEl) {
            e.stopPropagation();
            const field = dayEl.dataset.calendarDay;
            const dateTime = parseInt(dayEl.dataset.date, 10);
            const date = new Date(dateTime);

            if (dayEl.classList.contains('disabled') || dayEl.classList.contains('empty')) return;

            selectDate(field, date);
            return;
        }

        // --- Close on outside click ---
        if (!isCalendarArea) {
            closeAllCalendars();
        }
    });

    // --- INIT: Set default display values ---
    const initCalendarDisplay = () => {
        if (selectedCheckin) {
            checkinDisplay.textContent = formatDateDisplay(selectedCheckin);
            checkinDisplay.classList.remove('placeholder');
        }
        if (selectedCheckout) {
            checkoutDisplay.textContent = formatDateDisplay(selectedCheckout);
            checkoutDisplay.classList.remove('placeholder');
        }
    };
    initCalendarDisplay();

    // --- GET FULL DATE STRING (for form submit) ---
    const getFullDate = (field) => {
        const date = field === 'checkin' ? selectedCheckin : selectedCheckout;
        return formatDateISO(date);
    };

    // Stepper elements
    const adultCountEl = document.getElementById('adultCount');
    const childCountEl = document.getElementById('childCount');

    // --- STEPPERS ---
    const setupStepper = (valueEl, min, max) => {
        const container = valueEl.closest('.booking-stepper');
        const btns = container.querySelectorAll('.booking-stepper-btn');
        btns.forEach(btn => {
            btn.addEventListener('click', () => {
                let val = parseInt(valueEl.textContent, 10);
                const dir = btn.dataset.dir;
                if (dir === 'plus') val = Math.min(val + 1, max);
                else val = Math.max(val - 1, min);
                valueEl.textContent = val;
                // Trigger child age update if children
                if (valueEl.id === 'childCount') updateChildAges();
            });
        });
    };

    if (adultCountEl) setupStepper(adultCountEl, 1, 10);
    if (childCountEl) setupStepper(childCountEl, 0, 10);

    // --- DYNAMIC CHILD AGES ---
    const updateChildAges = () => {
        if (!childCountEl || !bookingChildAges) return;
        const count = parseInt(childCountEl.textContent, 10) || 0;
        bookingChildAges.innerHTML = '';
        for (let i = 0; i < count; i++) {
            const row = document.createElement('div');
            row.className = 'booking-child-age-row';
            row.innerHTML = `
                <span class="booking-child-age-label">Child ${i + 1} Age</span>
                <select>
                    ${Array.from({length: 11}, (_, j) => `<option value="${j + 1}">${j + 1}</option>`).join('')}
                </select>
            `;
            bookingChildAges.appendChild(row);
        }
    };

    // Initialize child ages
    updateChildAges();

    // --- POPUP CONTROLS ---
    const openBookingPopup = () => {
        bookingPopup.classList.add('active');
        document.body.style.overflow = 'hidden';
        // NO auto datepicker - user clicks when ready
    };

    const closeBookingPopup = () => {
        bookingPopup.classList.remove('active');
        document.body.style.overflow = '';
    };

    if (bookNowBtn && bookingPopup) {
        bookNowBtn.addEventListener('click', openBookingPopup);
    }

    if (bookingClose && bookingPopup) {
        bookingClose.addEventListener('click', closeBookingPopup);
    }

    if (bookingOverlay && bookingPopup) {
        bookingOverlay.addEventListener('click', closeBookingPopup);
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && bookingPopup && bookingPopup.classList.contains('active')) {
            closeBookingPopup();
        }
    });

    // --- FORM SUBMISSION ---
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const checkinDate = getFullDate('checkin');
            const checkoutDate = getFullDate('checkout');

            if (!checkinDate) {
                alert('Please select your Check-in date.');
                if (checkinTrigger) checkinTrigger.click();
                return;
            }
            if (!checkoutDate) {
                alert('Please select your Check-out date.');
                if (checkoutTrigger) checkoutTrigger.click();
                return;
            }

            const adultCount = parseInt(adultCountEl.textContent, 10);
            const childCount = parseInt(childCountEl.textContent, 10);

            // Collect child ages
            const childAgeSelects = bookingChildAges.querySelectorAll('select');
            const childAges = Array.from(childAgeSelects).map(sel => sel.value);
            const totalGuests = adultCount + childCount;

            const childAgesStr = childAges.join(',');

            const url = `https://book.kayagnhlondon.com/bv3/search?search={"checkin_date":"${checkinDate}","checkout_date":"${checkoutDate}","room_count":1,"total_adult":${adultCount},"total_child":${childCount},"rooms":[{"adult_count":"${adultCount}","guest_count":${totalGuests},"child_count":"${childCount}","child_ages":[${childAgesStr}]}]}`;

            window.open(url, '_blank');
        });
    }

    // ==========================================
    // GALLERY STRIP CAROUSEL
    // ==========================================
    const galleryStrip = document.getElementById('galleryStrip');
    const stripTrack = document.getElementById('galleryStripTrack');
    const stripPrev = document.getElementById('galleryStripPrev');
    const stripNext = document.getElementById('galleryStripNext');
    let stripIndex = 0;
    const visibleCount = window.innerWidth <= 480 ? 2 : window.innerWidth <= 1024 ? 3 : 5;
    const stripItemCount = stripTrack.children.length;
    const maxIndex = stripItemCount - visibleCount;

    function updateStripPosition() {
        const itemWidth = stripTrack.children[0]?.offsetWidth || 0;
        stripTrack.style.transform = `translateX(-${stripIndex * itemWidth}px)`;
    }

    stripPrev.addEventListener('click', () => {
        if (stripIndex > 0) {
            stripIndex--;
        } else {
            // Wrap around to the end
            stripIndex = maxIndex;
        }
        updateStripPosition();
    });

    stripNext.addEventListener('click', () => {
        if (stripIndex < maxIndex) {
            stripIndex++;
        } else {
            // Wrap around to the start
            stripIndex = 0;
        }
        updateStripPosition();
    });

    window.addEventListener('resize', updateStripPosition);

    // ==========================================
    // GALLERY LIGHTBOX
    // ==========================================
    const galleryItems = document.querySelectorAll('.gallery-strip-item');
    const lightbox = document.getElementById('galleryLightbox');
    const lightboxImage = document.getElementById('galleryLightboxImage');
    const lightboxCaption = document.getElementById('galleryLightboxCaption');
    const lightboxCounter = document.getElementById('galleryLightboxCounter');
    const lightboxClose = document.getElementById('galleryLightboxClose');
    const lightboxPrev = document.getElementById('galleryLightboxPrev');
    const lightboxNext = document.getElementById('galleryLightboxNext');
    const lightboxOverlay = document.getElementById('galleryLightboxOverlay');

    let currentIndex = 0;
    const items = [];

    galleryItems.forEach((item, index) => {
        items.push({
            src: item.getAttribute('data-src'),
            title: item.getAttribute('data-title')
        });

        item.addEventListener('click', () => {
            currentIndex = index;
            openLightbox(currentIndex);
        });
    });

    function openLightbox(index) {
        if (index < 0 || index >= items.length) return;
        currentIndex = index;
        const item = items[currentIndex];

        lightboxImage.classList.remove('loaded');
        lightboxImage.src = item.src;
        lightboxImage.alt = item.title;

        lightboxImage.onload = () => {
            lightboxImage.classList.add('loaded');
        };

        lightboxCaption.textContent = item.title;
        lightboxCounter.textContent = `${currentIndex + 1} / ${items.length}`;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Focus trap
        lightboxClose.focus();
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        lightboxImage.classList.remove('loaded');
        document.body.style.overflow = '';

        // Return focus to the last clicked item
        galleryItems[currentIndex]?.focus();
    }

    function navigateLightbox(direction) {
        let newIndex = currentIndex + direction;
        if (newIndex < 0) newIndex = items.length - 1;
        if (newIndex >= items.length) newIndex = 0;
        openLightbox(newIndex);
    }

    lightboxClose.addEventListener('click', closeLightbox);
    lightboxOverlay.addEventListener('click', closeLightbox);

    lightboxPrev.addEventListener('click', (e) => {
        e.stopPropagation();
        navigateLightbox(-1);
    });

    lightboxNext.addEventListener('click', (e) => {
        e.stopPropagation();
        navigateLightbox(1);
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;

        switch (e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowLeft':
                navigateLightbox(-1);
                break;
            case 'ArrowRight':
                navigateLightbox(1);
                break;
        }
    });

    // Touch swipe support for lightbox
    let touchStartX = 0;
    let touchEndX = 0;

    lightbox.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightbox.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > 60) {
            if (diff > 0) {
                navigateLightbox(1);
            } else {
                navigateLightbox(-1);
            }
        }
    });

    // ==========================================
    // ROOMS LIST SLIDER
    // ==========================================
    document.querySelectorAll('.rooms-list-slider').forEach(slider => {
        const slides = slider.querySelectorAll('.rooms-list-slide');
        const prev = slider.parentElement.querySelector('.rooms-list-slider-prev');
        const next = slider.parentElement.querySelector('.rooms-list-slider-next');
        let idx = 0;

        if (slides.length) slides[0].classList.add('active');

        function goTo(n) {
            slides.forEach(s => s.classList.remove('active'));
            idx = (n + slides.length) % slides.length;
            slides[idx].classList.add('active');
        }

        if (prev) prev.addEventListener('click', (e) => { e.stopPropagation(); goTo(idx - 1); });
        if (next) next.addEventListener('click', (e) => { e.stopPropagation(); goTo(idx + 1); });
    });

    // ==========================================
    // ROOMS CAROUSEL
    // ==========================================
    const roomsCarousel = document.getElementById('roomsCarousel');
    const roomsCarouselTrack = document.getElementById('roomsCarouselTrack');
    const roomsCarouselDots = document.getElementById('roomsCarouselDots');
    const roomsCarouselPrev = document.getElementById('roomsCarouselPrev');
    const roomsCarouselNext = document.getElementById('roomsCarouselNext');

    if (roomsCarousel && roomsCarouselTrack) {
        const roomCards = roomsCarouselTrack.querySelectorAll('.rooms-list-item');
        const roomsHeadingTarget = document.getElementById('ourRoomsHeading');
        let roomIndex = 0;
        let roomsTouchStartX = 0;

        roomCards.forEach((card, index) => {
            const dot = document.createElement('button');
            dot.className = `rooms-carousel-dot${index === 0 ? ' active' : ''}`;
            dot.type = 'button';
            dot.setAttribute('aria-label', `Show ${card.querySelector('.rooms-list-title')?.textContent || `room ${index + 1}`}`);
            dot.addEventListener('click', () => showRoom(index));
            roomsCarouselDots?.appendChild(dot);
        });

        const roomDots = roomsCarouselDots?.querySelectorAll('.rooms-carousel-dot') || [];

        function showRoom(index) {
            roomIndex = (index + roomCards.length) % roomCards.length;
            roomsCarouselTrack.style.transform = `translateX(-${roomIndex * 100}%)`;
            roomDots.forEach((dot, dotIndex) => dot.classList.toggle('active', dotIndex === roomIndex));
        }

        const linkedRoomIndex = Array.from(roomCards).findIndex(card => `#${card.id}` === window.location.hash);
        if (linkedRoomIndex >= 0) showRoom(linkedRoomIndex);

        if (window.location.hash === '#ourRoomsHeading' && roomsHeadingTarget) {
            requestAnimationFrame(() => {
                roomsHeadingTarget.focus({ preventScroll: true });
            });
        }

        roomsCarouselPrev?.addEventListener('click', () => showRoom(roomIndex - 1));
        roomsCarouselNext?.addEventListener('click', () => showRoom(roomIndex + 1));

        roomsCarousel.addEventListener('touchstart', (event) => {
            roomsTouchStartX = event.changedTouches[0].screenX;
        }, { passive: true });

        roomsCarousel.addEventListener('touchend', (event) => {
            const distance = roomsTouchStartX - event.changedTouches[0].screenX;
            if (Math.abs(distance) > 50) showRoom(roomIndex + (distance > 0 ? 1 : -1));
        }, { passive: true });
    }

    // ==========================================
    // ROOM DETAIL GALLERY SLIDER
    // ==========================================
    document.querySelectorAll('[data-room-slider]').forEach(slider => {
        const slides = slider.querySelectorAll('.edwardian-detail-slide');
        const prev = slider.parentElement.querySelector('.edwardian-detail-arrow--prev');
        const next = slider.parentElement.querySelector('.edwardian-detail-arrow--next');
        const counter = slider.parentElement.querySelector('[data-room-slide-current]');
        let idx = 0;

        if (slides.length) slides[0].classList.add('active');

        function goToRoomSlide(n) {
            slides.forEach(s => s.classList.remove('active'));
            idx = (n + slides.length) % slides.length;
            slides[idx].classList.add('active');
            if (counter) counter.textContent = idx + 1;
        }

        if (prev) prev.addEventListener('click', () => goToRoomSlide(idx - 1));
        if (next) next.addEventListener('click', () => goToRoomSlide(idx + 1));
    });

    // ==========================================
    // ROOM DETAIL BOOK NOW BUTTONS
    // ==========================================
    document.querySelectorAll('.room-detail-book-btn, .edwardian-book-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            openBookingPopup();
        });
    });

    // ==========================================
    // EXTRA BOOK NOW BUTTONS (hero, book-direct)
    // ==========================================
    const heroBookBtn = document.getElementById('heroBookBtn');
    if (heroBookBtn) heroBookBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openBookingPopup();
    });

    const bookDirectCta = document.getElementById('bookDirectCta');
    if (bookDirectCta) bookDirectCta.addEventListener('click', (e) => {
        e.preventDefault();
        openBookingPopup();
    });

    document.querySelectorAll('.rooms-book-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            openBookingPopup();
        });
    });

    const roomDetailBookBtn = document.getElementById('roomDetailBookBtn');
    if (roomDetailBookBtn) roomDetailBookBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openBookingPopup();
    });

    const roomDetailCtaBtn = document.getElementById('roomDetailCtaBtn');
    if (roomDetailCtaBtn) roomDetailCtaBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openBookingPopup();
    });

    // ==========================================
    // FAQ ACCORDION
    // ==========================================
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            const expanded = btn.getAttribute('aria-expanded') === 'true';
            btn.setAttribute('aria-expanded', String(!expanded));
            const answer = btn.nextElementSibling;
            if (answer) {
                answer.classList.toggle('open');
            }
        });
    });

    // ==========================================
    // CONSOLE SIGNATURE
    // ==========================================
    console.log('%c🏨 Kaya Great Northern Hotel', 'font-size: 1.4rem; font-weight: bold; color: #C4A35A;');
    console.log('%c📅 Since 1854 · Beautifully Connected, Effortlessly Stylish', 'font-size: 0.9rem; color: #0A2340;');
    console.log('%c🎬 Booking: Floating Book Now · Elegant Popup · Child age selector', 'font-size: 0.9rem; color: #5A5A6E;');
});
