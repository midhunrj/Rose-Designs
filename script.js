/**
 * ROSEDSIGNS — INTERACTIVE EXPERIENCE CONTROLLER
 * Responsive Landing Page functionality
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // 1. Header Scrollspy & Sticky Glass Effect
  // ==========================================================================
  const header = document.getElementById('header');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Scrollspy for active nav link
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 140;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // ==========================================================================
  // 2. Mobile Nav Drawer Toggle
  // ==========================================================================
  const menuToggle = document.getElementById('menuToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerClose = document.getElementById('drawerClose');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const drawerLinks = document.querySelectorAll('.drawer-link, .drawer-cta');

  const openDrawer = () => {
    mobileDrawer.classList.add('open');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    menuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    mobileDrawer.classList.remove('open');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  if (menuToggle) menuToggle.addEventListener('click', openDrawer);
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  // ==========================================================================
  // 3. Filterable Portfolio Tabs
  // ==========================================================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active button state
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filterVal = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const categories = card.getAttribute('data-category') || '';
        if (filterVal === 'all' || categories.includes(filterVal)) {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
          card.style.opacity = '0';
        }
      });
    });
  });

  // ==========================================================================
  // 4. Interactive Project Insights Modal & Data
  // ==========================================================================
  const projectDetails = {
    'a2b-perth': {
      title: 'A2B Perth',
      category: 'Hospitality • Web Platform • Reels',
      image: 'assets/images/portfolio-a2b.jpg',
      client: 'A2B Perth Indian Cuisine',
      deliverables: 'Custom Web Engineering, Brand Styling, Instagram Reel Series, Dine-In Digital Menu',
      challenge: 'Carving a prominent, high-end identity in Western Australia’s competitive culinary landscape while providing seamless table reservation workflows.',
      solution: 'Developed an editorial responsive website with subtle gold accents and quick-load menus, accompanied by cinematic video shoots that generated organic viral traction on Instagram and YouTube.',
      impact: '+185% increase in weekend table reservations and over 120,000 localized video impressions within the first 90 days.'
    },
    'biriyani-box': {
      title: 'Biriyani Box',
      category: 'Branding • Packaging • Web Ordering',
      image: 'assets/images/portfolio-biriyani.jpg',
      client: 'Biriyani Box Culinary Group',
      deliverables: 'Visual Identity, Custom Packaging Boxes, Web Experience, Social Launch Strategy',
      challenge: 'Designing an unforgettable physical-to-digital unboxing experience for a gourmet cloud-kitchen brand where first impressions dictate repeat orders.',
      solution: 'Created bold luxury packaging using bespoke food illustrations and a streamlined web ordering funnel optimized for sub-second mobile checkouts.',
      impact: 'Achieved 42% repeat customer order rate and widespread user-generated unboxing stories across social channels.'
    },
    'thirai-flicks': {
      title: 'Thirai Flicks',
      category: 'Media Production • YouTube • Video',
      image: 'assets/images/portfolio-thirai.jpg',
      client: 'Thirai Flicks Entertainment',
      deliverables: 'Cinematic Motion Graphics, YouTube Identity, Trailer Cuts, Cross-Platform Campaign',
      challenge: 'Capturing moviegoers’ divided attention with punchy, high-energy cinematic vignettes and establishing a distinct video production brandmark.',
      solution: 'Engineered an audio-visual identity with motion typography, custom intro animations, and modular video assets tailored for multi-aspect-ratio distribution.',
      impact: 'Surpassed 350,000 views on YouTube releases and established a recognizable digital brand seal across regional entertainment circles.'
    },
    'palayam-peppers': {
      title: 'Palayam Peppers',
      category: 'Artisanal Food • Heritage Identity • Packaging',
      image: 'assets/images/portfolio-palayam.jpg',
      client: 'Palayam Organic Farm Estate',
      deliverables: 'Heritage Storytelling, Sustainable Glass Jar Packaging, Botanical Typography, Pre-Launch Portal',
      challenge: 'Positioning centuries of heirloom spice cultivation into an ultra-premium culinary commodity sought after by boutique chefs and gourmet retail.',
      solution: 'Crafted an artisanal aesthetic grounded in earthy neutral palettes (#183B32 British Green and #B08A57 Antique Gold) with blind-embossed packaging accents.',
      impact: '100% of pre-order batches reserved prior to public harvest launch.'
    },
    'reflections': {
      title: 'Reflections Anthology',
      category: 'Documentary • Editorial Web • Publishing',
      image: 'assets/images/portfolio-reflections.jpg',
      client: 'Reflections Cultural Foundation',
      deliverables: 'Editorial Web Platform, Longform Typography, Documentary Video Trailers, Audio Narratives',
      challenge: 'Presenting human-interest memoirs with dignity, intimacy, and immersive digital pacing that respects the emotional gravity of each subject.',
      solution: 'Built an editorial web sanctuary featuring serif Didot-style typography, subtle scroll animations, and synchronized audio excerpts that draw readers into deep reflection.',
      impact: 'Recognized for editorial design elegance and reached readers across 28 countries.'
    },
    'a2b-yokine': {
      title: 'A2B Yokine',
      category: 'Social Growth • Visual Direction • Community',
      image: 'assets/images/portfolio-yokine.jpg',
      client: 'A2B Yokine Gourmet Dining',
      deliverables: 'Neighborhood Social Strategy, Event Coverage, Food Photography, Digital Presence',
      challenge: 'Connecting with nearby residential foodies and establishing the venue as the definitive destination for weekend family dining.',
      solution: 'Curated a vibrant visual narrative celebrating fresh ingredients, authentic spice rituals, and welcoming hospitality through intimate behind-the-scenes content.',
      impact: 'Doubled social follower base in 6 weeks and filled weekday catering bookings.'
    }
  };

  const projectModal = document.getElementById('projectModal');
  const modalClose = document.getElementById('modalClose');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalTitle = document.getElementById('modalProjectTitle');
  const modalCategory = document.getElementById('modalProjectCategory');
  const modalImg = document.getElementById('modalProjectImg');
  const modalChallenge = document.getElementById('modalChallenge');
  const modalSolution = document.getElementById('modalSolution');
  const modalClient = document.getElementById('modalClient');
  const modalDeliverables = document.getElementById('modalDeliverables');
  const modalImpact = document.getElementById('modalImpact');
  const modalInquireBtn = document.getElementById('modalInquireBtn');

  const openProjectModal = (projectId) => {
    const data = projectDetails[projectId] || projectDetails['a2b-perth'];
    modalTitle.textContent = data.title;
    modalCategory.textContent = data.category;
    modalImg.src = data.image;
    modalImg.alt = data.title;
    modalChallenge.textContent = data.challenge;
    modalSolution.textContent = data.solution;
    modalClient.textContent = data.client;
    modalDeliverables.textContent = data.deliverables;
    modalImpact.textContent = data.impact;

    projectModal.classList.add('open');
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    projectModal.classList.remove('open');
    projectModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  // Attach click listeners to cards
  projectCards.forEach(card => {
    const projectId = card.getAttribute('data-project');
    const triggerBtn = card.querySelector('.open-modal-btn');
    const viewLink = card.querySelector('.view-link');

    if (triggerBtn) {
      triggerBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        openProjectModal(projectId);
      });
    }

    if (viewLink) {
      viewLink.addEventListener('click', (e) => {
        e.stopPropagation();
        openProjectModal(projectId);
      });
    }

    card.addEventListener('click', () => {
      openProjectModal(projectId);
    });
  });

  if (modalClose) modalClose.addEventListener('click', closeProjectModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeProjectModal);
  if (modalInquireBtn) {
    modalInquireBtn.addEventListener('click', () => {
      closeProjectModal();
    });
  }

  // Keyboard escape handler
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (projectModal.classList.contains('open')) closeProjectModal();
      if (mobileDrawer.classList.contains('open')) closeDrawer();
    }
  });

  // ==========================================================================
  // 5. Interactive Project Brief Estimator (Scope Builder)
  // ==========================================================================
  const typePills = document.querySelectorAll('#briefTypePills .choice-pill');
  const timelinePills = document.querySelectorAll('#briefTimelinePills .choice-pill');
  const featureCheckboxes = document.querySelectorAll('#briefFeaturesList input[type="checkbox"]');
  const summaryHeading = document.getElementById('summaryHeading');
  const summaryText = document.getElementById('summaryText');
  const applyBriefBtn = document.getElementById('applyBriefToForm');
  const userMessageTextarea = document.getElementById('userMessage');

  let selectedType = 'Full Digital Brand (Identity + Web)';
  let selectedTimeline = 'Standard (4-6 Weeks)';

  const updateBriefSummary = () => {
    const checkedFeatures = [];
    featureCheckboxes.forEach(cb => {
      if (cb.checked) {
        checkedFeatures.push(cb.value);
      }
    });

    summaryHeading.textContent = `${selectedType} • ${selectedTimeline}`;
    if (checkedFeatures.length > 0) {
      summaryText.textContent = `Includes: ${checkedFeatures.join(', ')}. Engineered with precision for maximum brand recall and conversion.`;
    } else {
      summaryText.textContent = `Custom roadmap tailored to your specific milestones and business objectives.`;
    }
  };

  typePills.forEach(pill => {
    pill.addEventListener('click', () => {
      typePills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      selectedType = pill.getAttribute('data-type');
      updateBriefSummary();
    });
  });

  timelinePills.forEach(pill => {
    pill.addEventListener('click', () => {
      timelinePills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      selectedTimeline = pill.getAttribute('data-timeline');
      updateBriefSummary();
    });
  });

  featureCheckboxes.forEach(cb => {
    cb.addEventListener('change', updateBriefSummary);
  });

  if (applyBriefBtn) {
    applyBriefBtn.addEventListener('click', () => {
      const generatedBrief = `[Project Brief Generated via Scope Builder]\n• Objective: ${selectedType}\n• Timeline Target: ${selectedTimeline}\n• Deliverables: ${Array.from(featureCheckboxes).filter(c => c.checked).map(c => c.value).join(', ')}\n\nHello RoseDsigns team, I would like to explore this project with you.`;
      
      if (userMessageTextarea) {
        userMessageTextarea.value = generatedBrief;
      }

      // Smooth scroll to contact
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        showToast('✓ Project brief applied to inquiry form below!');
      }
    });
  }

  // ==========================================================================
  // 6. Service Card Direct Selection Buttons
  // ==========================================================================
  const selectServiceBtns = document.querySelectorAll('.select-service-btn');
  selectServiceBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const serviceName = btn.getAttribute('data-service-name');
      
      // Select corresponding checkbox in contact form if present
      const checkboxes = document.querySelectorAll('input[name="services"]');
      checkboxes.forEach(cb => {
        if (serviceName.toLowerCase().includes(cb.value.toLowerCase()) || 
            cb.value.toLowerCase().includes(serviceName.toLowerCase())) {
          cb.checked = true;
        }
      });

      if (userMessageTextarea && !userMessageTextarea.value) {
        userMessageTextarea.value = `Interested in exploring your ${serviceName} services for my business.`;
      }

      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        showToast(`✓ Selected "${serviceName}" in project inquiry!`);
      }
    });
  });

  // ==========================================================================
  // 7. Contact Form Validation & Submission
  // ==========================================================================
  const inquiryForm = document.getElementById('inquiryForm');
  const userNameInput = document.getElementById('userName');
  const userEmailInput = document.getElementById('userEmail');
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');
  const submitBtn = document.getElementById('submitBtn');

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  if (inquiryForm) {
    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let hasError = false;

      // Validate Name
      if (!userNameInput.value.trim()) {
        userNameInput.closest('.form-group').classList.add('has-error');
        hasError = true;
      } else {
        userNameInput.closest('.form-group').classList.remove('has-error');
      }

      // Validate Email
      if (!isValidEmail(userEmailInput.value.trim())) {
        userEmailInput.closest('.form-group').classList.add('has-error');
        hasError = true;
      } else {
        userEmailInput.closest('.form-group').classList.remove('has-error');
      }

      // Validate Message
      if (!userMessageTextarea.value.trim()) {
        userMessageTextarea.closest('.form-group').classList.add('has-error');
        hasError = true;
      } else {
        userMessageTextarea.closest('.form-group').classList.remove('has-error');
      }

      if (hasError) {
        showToast('⚠ Please complete all required fields.');
        return;
      }

      // Submit state animation
      submitBtn.classList.add('loading');
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
        
        // Success notification
        showToast('🌹 Thank you! Your project brief has been received. RoseDsigns will reply within 24 hours.');
        inquiryForm.reset();
        
        // Reset defaults
        updateBriefSummary();
      }, 1200);
    });

    // Real-time cleanup on input
    userNameInput.addEventListener('input', () => {
      if (userNameInput.value.trim()) {
        userNameInput.closest('.form-group').classList.remove('has-error');
      }
    });

    userEmailInput.addEventListener('input', () => {
      if (isValidEmail(userEmailInput.value.trim())) {
        userEmailInput.closest('.form-group').classList.remove('has-error');
      }
    });

    userMessageTextarea.addEventListener('input', () => {
      if (userMessageTextarea.value.trim()) {
        userMessageTextarea.closest('.form-group').classList.remove('has-error');
      }
    });
  }

  // ==========================================================================
  // 8. Reusable Toast Notification System
  // ==========================================================================
  const toastContainer = document.getElementById('toastContainer');

  function showToast(message, duration = 4000) {
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;

    toastContainer.appendChild(toast);

    // Trigger enter animation
    setTimeout(() => {
      toast.classList.add('show');
    }, 20);

    // Remove toast after duration
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 350);
    }, duration);
  }

  // ==========================================================================
  // 9. Back to Top Button
  // ==========================================================================
  const backToTopBtn = document.getElementById('backToTop');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

});
