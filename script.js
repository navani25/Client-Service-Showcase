// --- ENHANCED SCRIPT WITH ANIMATIONS & SMOOTH SCROLLING ---
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('nav a');
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    
// ========================================
// SMOOTH SCROLLING FOR NAVIGATION WITH ANIMATIONS
// ========================================
for (const link of navLinks) {
    link.addEventListener('click', function(event) {
        // We do NOT prevent the default behavior, so the browser can scroll smoothly using our CSS rule.
        
        const targetId = this.getAttribute('href');
        
        // This handles the special case for the scroll-to-top button
        if (targetId === '#') {
             event.preventDefault(); // Prevent default only for this specific case
             window.scrollTo({ top: 0, behavior: 'smooth' });
             return;
        }

        const targetSection = document.querySelector(targetId);

        // If the target section exists on the page...
        if (targetSection) {
            // ...we call your custom function to trigger the animations!
            addNavbarSlideAnimation(targetSection);
        }
    });
}

    // ========================================
    // CONTENT SLIDE ANIMATION FUNCTION (Main Containers Slide LEFT, Content Slides RIGHT)
    // ========================================
    function triggerContentSlideAnimations(section) {
        const sectionId = section.id;
        
        // Remove existing content animation classes
        const contentElements = section.querySelectorAll('.about-card-dark, .timeline, .skills-grid, .skills-grid .skill, .projects-enhanced-grid, .projects-enhanced-grid .project-card-enhanced, .certificates-grid, .contact-container, .contact-left, .contact-right, .timeline-item');
        
        contentElements.forEach(element => {
            // Force re-trigger animation by removing and re-adding animation
            element.style.animation = 'none';
            element.style.opacity = '0';
            
            // Add a small delay to ensure the reset is applied
            setTimeout(() => {
                element.style.animation = '';
                element.style.opacity = '';
            }, 10);
        });
        
// =========================================================================
        // --- NEW & UNIFIED ANIMATION LOGIC FOR ALL SECTIONS ---
        // =========================================================================
        switch(sectionId) {
            case 'about':
            case 'experience':
                const card = section.querySelector('.about-card-dark');
                if (card) {
                    card.style.animation = 'slideInFromLeft 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s forwards';
                    const innerContent = card.querySelectorAll('h3, .degree, .university, .experience-description');
                    innerContent.forEach((item, index) => {
                        item.style.animation = 'none'; item.style.opacity = '0';
                        setTimeout(() => {
                            item.style.animation = `slideInFromLeft 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${0.5 + (index * 0.15)}s forwards`;
                            item.style.opacity = '';
                        }, 10);
                    });
                }
                break;
                
            case 'skills':
                const skillsGrid = section.querySelector('.skills-grid');
                if (skillsGrid) {
                    skillsGrid.style.animation = 'slideInFromLeft 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s forwards';
                    const skills = section.querySelectorAll('.skill');
                    skills.forEach((skill, index) => {
                        skill.style.animation = 'none'; skill.style.opacity = '0';
                        setTimeout(() => {
                            skill.style.animation = `slideInFromLeft 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${0.5 + (index * 0.05)}s forwards`;
                            skill.style.opacity = '';
                        }, 10);
                    });
                }
                break;
                
            case 'projects':
                const projectsGrid = section.querySelector('.projects-enhanced-grid');
                if (projectsGrid) {
                    projectsGrid.style.animation = 'slideInFromLeft 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s forwards';
                    const projectCards = section.querySelectorAll('.project-card-enhanced');
                    projectCards.forEach((card, index) => {
                        card.style.animation = 'none'; card.style.opacity = '0';
                        setTimeout(() => {
                            card.style.animation = `slideInFromLeft 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${0.5 + (index * 0.1)}s forwards`;
                            card.style.opacity = '';
                        }, 10);
                    });
                }
                break;
                
            case 'certificates':
                const certsGrid = section.querySelector('.certificates-grid');
                if (certsGrid) {
                    certsGrid.style.animation = 'slideInFromLeft 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s forwards';
                    const certCards = section.querySelectorAll('.certificate-card');
                    certCards.forEach((card, index) => {
                        card.style.animation = 'none'; card.style.opacity = '0';
                        setTimeout(() => {
                            card.style.animation = `slideInFromLeft 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${0.5 + (index * 0.1)}s forwards`;
                            card.style.opacity = '';
                        }, 10);
                    });
                }
                break;
                
            case 'contact':
                const contactContainer = section.querySelector('.contact-container');
                if (contactContainer) {
                    contactContainer.style.animation = 'slideInFromLeft 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s forwards';
                    const contactParts = section.querySelectorAll('.contact-left, .contact-right');
                     contactParts.forEach((part, index) => {
                        part.style.animation = 'none'; part.style.opacity = '0';
                        setTimeout(() => {
                            part.style.animation = `slideInFromLeft 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${0.5 + (index * 0.2)}s forwards`;
                            part.style.opacity = '';
                        }, 10);
                    });
                }
                // Also keep the original, separate animation for the form fields
                setTimeout(() => {
                    triggerFormFieldAnimations();
                }, 600);
                break;
        }
    }
    
    // ========================================
    // NAVBAR SLIDE ANIMATION FUNCTION (No change)
    // ========================================
    function addNavbarSlideAnimation(section) {
        // Remove any existing navbar animation classes
        section.classList.remove('navbar-slide-active', 'navbar-slide-about', 'navbar-slide-experience', 
                                 'navbar-slide-skills', 'navbar-slide-projects', 'navbar-slide-certificates', 
                                 'navbar-slide-contact', 'section-content-slide');
        
        // Determine section type and apply appropriate animation class
        const sectionId = section.id;
        
        switch(sectionId) {
            case 'about':
                section.classList.add('navbar-slide-about');
                break;
            case 'experience':
                section.classList.add('navbar-slide-experience');
                break;
            case 'skills':
                section.classList.add('navbar-slide-skills');
                break;
            case 'projects':
                section.classList.add('navbar-slide-projects');
                break;
            case 'certificates':
                section.classList.add('navbar-slide-certificates');
                break;
            case 'contact':
                section.classList.add('navbar-slide-contact');
                // Also trigger enhanced form field animations for contact section
                setTimeout(() => {
                    triggerFormFieldAnimations();
                }, 600); // Delay to allow section animation to start
                break;
            default:
                section.classList.add('navbar-slide-active');
        }
        
        // Also trigger content slide animations
        setTimeout(() => {
            triggerContentSlideAnimations(section);
        }, 100); 
        
        // Remove animation classes after animation completes to allow re-triggering
        setTimeout(() => {
            section.classList.remove('navbar-slide-active', 'navbar-slide-about', 'navbar-slide-experience', 
                                     'navbar-slide-skills', 'navbar-slide-projects', 'navbar-slide-certificates', 
                                     'navbar-slide-contact', 'section-content-slide');
        }, 1000); // Slightly longer than animation duration to ensure completion
    }

    // ========================================
    // SCROLL TO TOP BUTTON (No change)
    // ========================================
    window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    };

    scrollTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ========================================
    // INTERSECTION OBSERVER FOR ANIMATIONS (No change)
    // ========================================
    
    // Create intersection observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                // Check if the element is a section and trigger content slide animations
                if (element.tagName === 'SECTION' && element.id !== 'home') {
                    // Trigger content slide animations for sections
                    setTimeout(() => {
                        triggerContentSlideAnimations(element);
                    }, 300); // Delay to allow title animation to complete first
                }
                
                const delay = element.getAttribute('data-delay') || '0';
                
                // Handle sequential animations with delays
                setTimeout(() => {
                    element.classList.add('animate');
                    
                    // Add specific animation class based on data attribute
                    const animationType = element.getAttribute('data-animation');
                    if (animationType) {
                        element.classList.add(animationType);
                    }
                }, parseFloat(delay) * 1000);
            }
        });
    }, observerOptions);

    // Observe all elements with animate-on-scroll class
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // ========================================
    // AUTO-ANIMATION ASSIGNMENTS (UPDATED)
    // ========================================
    
    // Add animation classes to specific sections
    function assignAnimations() {
        // Hero section animations (No change)
        const heroImage = document.querySelector('.hero-image-wrapper');
        const heroText = document.querySelector('.hero-text');
        const heroButtons = document.querySelector('.hero-buttons');
        const socialIcons = document.querySelector('.social-icons');
        
        if (heroImage) {
            heroImage.classList.add('animate-on-scroll', 'fade-in-left', 'move-left');
            heroImage.setAttribute('data-animation', 'fade-in-left');
        }
        
        if (heroText) {
            heroText.classList.add('animate-on-scroll', 'fade-in-right', 'move-right');
            heroText.setAttribute('data-animation', 'fade-in-right');
        }
        
        if (heroButtons) {
            heroButtons.classList.add('animate-on-scroll', 'fade-in-up', 'move-up');
            heroButtons.setAttribute('data-animation', 'fade-in-up');
        }
        
        if (socialIcons) {
            socialIcons.classList.add('animate-on-scroll', 'fade-in-up', 'move-up');
            socialIcons.setAttribute('data-animation', 'fade-in-up');
        }

        // Section titles and content
        const sectionTitles = document.querySelectorAll('.section-title');
        const sectionSubtitles = document.querySelectorAll('.section-subtitle');
        const aboutCard = document.querySelector('.about-card-dark');
        const skillsGrid = document.querySelector('.skills-grid');
        const projectsGrid = document.querySelector('.projects-enhanced-grid');
        const certificatesGrid = document.querySelector('.certificates-grid');
        const contactLeft = document.querySelector('.contact-left');
        const contactRight = document.querySelector('.contact-right');
        const contactContainer = document.querySelector('.contact-container'); // Added

        sectionSubtitles.forEach((subtitle, index) => {
            subtitle.classList.add('animate-on-scroll', 'fade-in-down');
            subtitle.setAttribute('data-animation', 'fade-in-down');
            subtitle.style.animationDelay = `${index * 0.1}s`;
        });

         sectionTitles.forEach((title, index) => {
           // TITLE NOW SLIDES FROM THE RIGHT
           title.classList.remove("slide-in-up", "slide-in-from-left"); // Remove old classes
           title.classList.add("animate-on-scroll", "slide-in-from-right"); // Add new class
           title.setAttribute("data-animation", "slide-in-from-right"); // Update data attribute
           title.style.animationDelay = `${(index + 1) * 0.1}s`;
         });
        // ========================================
        // CONTENT ANIMATIONS - MODIFIED: BOX SLIDES LEFT, CONTENT SLIDES RIGHT
        // ========================================
        
        // Main Cards/Grids Slide from Left (This ensures the box slides left on scroll)
        if (aboutCard) {
            aboutCard.classList.remove('zoom-in', 'slide-in-from-right');
            aboutCard.classList.add('slide-in-from-left'); 
            aboutCard.setAttribute('data-animation', 'slide-in-from-left');
        }

        if (skillsGrid) {
            skillsGrid.classList.remove('fade-in-up', 'slide-in-from-right');
            skillsGrid.classList.add('slide-in-from-left'); 
            skillsGrid.setAttribute('data-animation', 'slide-in-from-left');
        }

        if (projectsGrid) {
            projectsGrid.classList.remove('fade-in-up', 'slide-in-from-right');
            projectsGrid.classList.add('slide-in-from-left'); 
            projectsGrid.setAttribute('data-animation', 'slide-in-from-left');
        }

        if (certificatesGrid) {
            certificatesGrid.classList.remove('fade-in-up', 'slide-in-from-right');
            certificatesGrid.classList.add('slide-in-from-left'); 
            certificatesGrid.setAttribute('data-animation', 'slide-in-from-left');
        }
        
        if (contactContainer) {
            contactContainer.classList.remove('fade-in-up', 'slide-in-from-right');
            contactContainer.classList.add('slide-in-from-left'); 
            contactContainer.setAttribute('data-animation', 'slide-in-from-left');
        }
        
        // Contact Child Elements - Slide from the right
        if (contactLeft) {
            contactLeft.classList.remove('fade-in-left', 'slide-in-from-left');
            contactLeft.classList.add('slide-in-from-right');
            contactLeft.setAttribute('data-animation', 'slide-in-from-right');
        }

        if (contactRight) {
            contactRight.classList.remove('fade-in-right', 'slide-in-from-left');
            contactRight.classList.add('slide-in-from-right');
            contactRight.setAttribute('data-animation', 'slide-in-from-right');
        }

        // Timeline items - Slide from the right
        const timelineItems = document.querySelectorAll('.timeline-item');
        timelineItems.forEach((item, index) => {
            item.classList.remove('slide-in-left');
            item.classList.add('animate-on-scroll', 'slide-in-from-right');
            item.setAttribute('data-animation', 'slide-in-from-right');
            item.style.animationDelay = `${index * 0.2}s`;
        });

        // Project cards - Slide from the right
        const projectCards = document.querySelectorAll('.project-card-enhanced');
        projectCards.forEach((card, index) => {
            card.classList.remove('zoom-in');
            card.classList.add('animate-on-scroll', 'slide-in-from-right', 'hover-lift');
            card.setAttribute('data-animation', 'slide-in-from-right');
            card.style.animationDelay = `${index * 0.1}s`;
            
            // Add hover effects
            card.addEventListener('mouseenter', function() {
                this.classList.add('hover-scale');
            });
            
            card.addEventListener('mouseleave', function() {
                this.classList.remove('hover-scale');
            });
        });

        // Certificate cards - Slide from the right
        const certificateCards = document.querySelectorAll('.certificate-card');
        certificateCards.forEach((card, index) => {
            card.classList.remove('bounce-in');
            card.classList.add('animate-on-scroll', 'slide-in-from-right', 'hover-lift');
            card.setAttribute('data-animation', 'slide-in-from-right');
            card.style.animationDelay = `${index * 0.1}s`;
            
            card.addEventListener('mouseenter', function() {
                this.classList.add('hover-scale');
            });
            
            card.addEventListener('mouseleave', function() {
                this.classList.remove('hover-scale');
            });
        });

        // Skills - Slide from the right
        const skills = document.querySelectorAll('.skill');
        skills.forEach((skill, index) => {
            skill.classList.remove('fade-in-up');
            skill.classList.add('animate-on-scroll', 'slide-in-from-right', 'hover-lift');
            skill.setAttribute('data-animation', 'slide-in-from-right');
            skill.style.animationDelay = `${index * 0.05}s`;
            
            skill.addEventListener('mouseenter', function() {
                this.classList.add('hover-scale', 'pulse');
            });
            
            skill.addEventListener('mouseleave', function() {
                this.classList.remove('hover-scale', 'pulse');
            });
        });
        
        // ========================================
        // END CONTENT ANIMATIONS UPDATE
        // ========================================

        // Navigation hover effects (No change)
        navLinks.forEach(link => {
            link.classList.add('hover-lift');
            
            link.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px)';
            });
            
            link.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });

        // Button animations (No change)
        const buttons = document.querySelectorAll('.btn, .btn-outline, .btn-dark, .btn-submit');
        buttons.forEach(button => {
            button.classList.add('hover-lift');
            
            button.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-3px)';
                this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '';
            });
        });

        // Social icons (No change)
        const allSocialIcons = document.querySelectorAll('.social-icons a, .contact-social-icons a');
        allSocialIcons.forEach(icon => {
            icon.classList.add('hover-rotate', 'hover-lift');
            
            icon.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.1) rotate(5deg)';
            });
            
            icon.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1) rotate(0deg)';
            });
        });

        // Re-observe all elements
        const newAnimatedElements = document.querySelectorAll('.animate-on-scroll');
        newAnimatedElements.forEach(el => {
            observer.observe(el);
        });
    }

    // ========================================
    // PARALLAX EFFECT (No change)
    // ========================================
    function initParallax() {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            // Add parallax to hero section
            const heroSection = document.getElementById('hero');
            if (heroSection) {
                heroSection.style.transform = `translateY(${rate}px)`;
            }
        });
    }

    // ========================================
    // FLOATING ELEMENTS (No change)
    // ========================================
    function initFloatingElements() {
        // Profile image - no floating animation, hover effects only

        // Add floating to skills occasionally
        const skills = document.querySelectorAll('.skill');
        skills.forEach((skill, index) => {
            if (index % 3 === 0) {
                skill.classList.add('float');
                skill.style.animationDelay = `${Math.random() * 2}s`;
            }
        });
    }

    // ========================================
    // LOADING ANIMATION (No change)
    // ========================================
    function initLoadingAnimation() {
        // Add loading class to body
        document.body.classList.add('loading');
        
        // Remove loading class after page load
        setTimeout(() => {
            document.body.classList.remove('loading');
        }, 1000);
    }

    // ========================================
    // TYPING ANIMATION FOR HERO TEXT (No change)
    // ========================================
    function initTypingAnimation() {
        const heroTitle = document.querySelector('h1');
        const heroSubtitle = document.querySelector('h2');
        
        if (heroTitle && heroSubtitle) {
            // Typing effect for main title
            const titleText = heroTitle.textContent;
            heroTitle.textContent = '';
            heroTitle.style.borderRight = '2px solid #1976d2';
            
            let titleIndex = 0;
            const titleTimer = setInterval(() => {
                heroTitle.textContent += titleText.charAt(titleIndex);
                titleIndex++;
                if (titleIndex >= titleText.length) {
                    clearInterval(titleTimer);
                    setTimeout(() => {
                        heroTitle.style.borderRight = 'none';
                    }, 500);
                    
                    // Start subtitle typing
                    const subtitleText = heroSubtitle.textContent;
                    heroSubtitle.textContent = '';
                    
                    let subtitleIndex = 0;
                    const subtitleTimer = setInterval(() => {
                        heroSubtitle.textContent += subtitleText.charAt(subtitleIndex);
                        subtitleIndex++;
                        if (subtitleIndex >= subtitleText.length) {
                            clearInterval(subtitleTimer);
                        }
                    }, 50);
                }
            }, 100);
        }
    }

    // ========================================
    // SMOOTH COUNTER ANIMATION (No change)
    // ========================================
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        function updateCounter() {
            start += increment;
            element.textContent = Math.floor(start);
            
            if (start < target) {
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        }
        
        updateCounter();
    }

    // ========================================
    // SCROLL PROGRESS BAR (No change)
    // ========================================
    function initScrollProgressBar() {
        // Create progress bar
        const progressBar = document.createElement('div');
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(90deg, #1976d2, #42a5f5);
            z-index: 9999;
            transition: width 0.1s ease;
        `;
        document.body.appendChild(progressBar);

        // Update progress on scroll
        window.addEventListener('scroll', function() {
            const scrolled = (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            progressBar.style.width = scrolled + '%';
        });
    }

    // ========================================
    // MAGNETIC BUTTON EFFECT (No change)
    // ========================================
    function initMagneticButtons() {
        const buttons = document.querySelectorAll('.btn, .btn-outline, .btn-dark');
        
        buttons.forEach(button => {
            button.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                this.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.transform = 'translate(0, 0)';
            });
        });
    }

    // ========================================
    // INITIALIZE ALL FEATURES (No change)
    // ========================================
    
    // Start with animations assignment
    assignAnimations();
    
    // Initialize features with slight delay
    setTimeout(() => {
        initParallax();
        initFloatingElements();
        initLoadingAnimation();
        initScrollProgressBar();
        initMagneticButtons();
        
        // Only add typing animation if user hasn't disabled animations
        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            initTypingAnimation();
        }
    }, 500);

    // Re-run assignment after a short delay to ensure all elements are loaded
    setTimeout(assignAnimations, 1000);

    // Handle window resize
    window.addEventListener('resize', function() {
        setTimeout(assignAnimations, 100);
    });

    // ========================================
    // ENHANCED FORM FIELD ANIMATIONS (No change, remains Top/Bottom)
    // ========================================
    
    function triggerFormFieldAnimations() {
        const contactSection = document.getElementById('contact');
        if (!contactSection) return;
        
        // Select all relevant form elements (inputs, textarea, and submit button)
        const formFields = contactSection.querySelectorAll('input, textarea, .btn-submit');
        
        // 1. Reset all animation properties
        formFields.forEach(field => {
            // Remove all specific animation classes and reset inline styles
            field.classList.remove('slide-in-from-top', 'slide-in-from-bottom', 'slideInFromTopEnhanced', 'slideInFromBottomEnhanced', 'animate');
            field.style.animation = 'none';
            field.style.opacity = '0';
            field.style.transform = 'none';
        });

        // 2. Apply new, staggered, alternating animations
        // Small timeout to ensure the reset above forces a reflow and allows the animation to re-run
        setTimeout(() => {
            formFields.forEach((field, index) => {
                // Alternate animation class: even indices slide from top, odd from bottom
                const animationClass = index % 2 === 0 ? 'slide-in-from-top' : 'slide-in-from-bottom';
                const delay = 0.1 * index; // Stagger the animation start time

                field.classList.add(animationClass, 'animate');
                // Apply inline styles for the stagger delay
                field.style.animationDelay = `${delay}s`;
                field.style.animation = ''; // Clear 'none'
                field.style.opacity = '';
                field.style.transform = '';
            });
        }, 50);
    }

    // Trigger form animations when contact section is visible
    const contactObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.target.id === 'contact') {
                // Use a short delay to allow the rest of the section content to appear first
                setTimeout(triggerFormFieldAnimations, 200); 
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactObserver.observe(contactSection);
    }

    // ========================================
    // CUSTOM ANIMATION TRIGGERS (No change)
    // ========================================
    
    // Trigger animations on page load for hero section
    window.addEventListener('load', function() {
        setTimeout(() => {
            const heroElements = document.querySelectorAll('#hero .animate-on-scroll');
            heroElements.forEach(el => {
                el.classList.add('animate');
            });
        }, 300);
    });

});

// ========================================
// UTILITY FUNCTIONS (No change)
// ========================================

// Debounce function for performance
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}
document.addEventListener('DOMContentLoaded', () => {
    // Scroll-to-top button logic
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    
    window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    };

    // Animate on scroll logic
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });

    // --- NEW: THEME SWITCHER LOGIC ---

    const themeToggleButton = document.getElementById('theme-toggle-button');
    const htmlElement = document.documentElement;

    // Function to apply the theme
    const applyTheme = (theme) => {
        htmlElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    };

    // Check for a saved theme in localStorage and apply it
    const savedTheme = localStorage.getItem('theme') || 'dark'; // Default to dark
    applyTheme(savedTheme);

    // Event listener for the toggle button
    themeToggleButton.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
    });
});