// Sample project data
const projects = [
    {
        title: "E-Commerce Platform",
        description: "A modern e-commerce platform built with React and Node.js, featuring real-time inventory management and secure payment processing.",
        image: "assets/images/projects/project1.jpg",
        tags: ["React", "Node.js", "MongoDB"],
        category: "web",
        link: "#"
    },
    {
        title: "Mobile Banking App",
        description: "A secure and intuitive mobile banking application that enables users to manage their finances with advanced features and real-time notifications.",
        image: "assets/images/projects/project2.jpg",
        tags: ["React Native", "Firebase", "Redux"],
        category: "mobile",
        link: "#"
    },
    {
        title: "AI-Powered Analytics",
        description: "An advanced analytics dashboard that leverages machine learning to provide actionable insights from complex business data.",
        image: "assets/images/projects/project3.jpg",
        tags: ["Python", "TensorFlow", "Vue.js"],
        category: "web",
        link: "#"
    },
    {
        title: "Healthcare Management System",
        description: "A comprehensive healthcare management system designed to streamline patient care and medical record management.",
        image: "assets/images/projects/project4.jpg",
        tags: ["Angular", "Node.js", "PostgreSQL"],
        category: "web",
        link: "#"
    },
    {
        title: "Fitness Tracking App",
        description: "A mobile application that helps users track their fitness goals, workout routines, and nutrition plans with an intuitive interface.",
        image: "assets/images/projects/project5.jpg",
        tags: ["Flutter", "Firebase", "Google Fit API"],
        category: "mobile",
        link: "#"
    },
    {
        title: "Travel Experience Platform",
        description: "A beautiful travel platform that connects travelers with unique experiences and local guides worldwide.",
        image: "assets/images/projects/project6.jpg",
        tags: ["React", "GraphQL", "AWS"],
        category: "ui",
        link: "#"
    }
];

// State management
let currentPage = 1;
const projectsPerPage = 6;
let filteredProjects = [...projects];

// DOM Elements
const projectsGrid = document.getElementById('projectsGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('projectSearch');
const loadMoreBtn = document.querySelector('.load-more-btn');
const contactForm = document.querySelector('.contact-form');

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    if (projectsGrid) {
        initializeProjects();
        setupEventListeners();
    }
    setupScrollAnimation();
});

// Function to create project cards
function createProjectCard(project) {
    return `
        <article class="project-card animate-on-scroll">
            <div class="project-image-container">
                <img src="${project.image}" alt="${project.title}" class="project-image">
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.link}" class="view-project">View Project <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>
        </article>
    `;
}

// Initialize projects
function initializeProjects() {
    loadProjects();
    updateLoadMoreButton();
}

// Load projects
function loadProjects() {
    const startIndex = (currentPage - 1) * projectsPerPage;
    const endIndex = startIndex + projectsPerPage;
    const projectsToShow = filteredProjects.slice(0, endIndex);
    
    projectsGrid.innerHTML = projectsToShow.map(project => createProjectCard(project)).join('');
    initializeAnimations();
}

// Filter projects
function filterProjects(category) {
    currentPage = 1;
    filteredProjects = category === 'all' 
        ? [...projects]
        : projects.filter(project => project.category === category);
    
    loadProjects();
    updateLoadMoreButton();
}

// Search projects
function searchProjects(query) {
    currentPage = 1;
    const searchTerm = query.toLowerCase();
    
    filteredProjects = projects.filter(project => 
        project.title.toLowerCase().includes(searchTerm) ||
        project.description.toLowerCase().includes(searchTerm) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
    
    loadProjects();
    updateLoadMoreButton();
}

// Update load more button visibility
function updateLoadMoreButton() {
    const startIndex = (currentPage - 1) * projectsPerPage;
    const endIndex = startIndex + projectsPerPage;
    
    if (loadMoreBtn) {
        loadMoreBtn.style.display = endIndex >= filteredProjects.length ? 'none' : 'inline-flex';
    }
}

// Setup event listeners
function setupEventListeners() {
    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filterProjects(button.dataset.category);
        });
    });

    // Search input
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchProjects(e.target.value);
        });
    }

    // Load more button
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            currentPage++;
            loadProjects();
            updateLoadMoreButton();
        });
    }

    // Contact form
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactFormSubmit);
    }

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile navigation toggle
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileNavToggle && navLinks) {
        mobileNavToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileNavToggle.classList.toggle('active');
        });
    }
}

// Handle contact form submission
async function handleContactFormSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
        // Here you would typically send the data to your server
        console.log('Form data:', data);
        
        // Show success message
        alert('Thank you for your message! We will get back to you soon.');
        e.target.reset();
    } catch (error) {
        console.error('Error submitting form:', error);
        alert('There was an error sending your message. Please try again later.');
    }
}

// Initialize animations for project cards
function initializeAnimations() {
    const cards = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    cards.forEach(card => observer.observe(card));
}

// Image preview for project form
const projectImageInput = document.querySelector('#projectImage');
const imagePreview = document.querySelector('#imagePreview');

if (projectImageInput && imagePreview) {
    projectImageInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                imagePreview.src = e.target.result;
                imagePreview.style.display = 'block';
            };
            reader.readAsDataURL(file);
        }
    });
}

// Handle navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}); 