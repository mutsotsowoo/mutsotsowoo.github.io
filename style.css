/* Base Styles and Variables */
:root {
    --primary-color: #4CAF50;
    --primary-dark: #388E3C;
    --primary-light: #C8E6C9;
    --secondary-color: #FFC107;
    --text-color: #333333;
    --text-light: #757575;
    --background-color: #F5F5F5;
    --white: #FFFFFF;
    --error-color: #F44336;
    --success-color: #4CAF50;
    --warning-color: #FF9800;
    --info-color: #2196F3;
    --border-radius: 8px;
    --box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    --transition: all 0.3s ease;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: var(--text-color);
    background-color: var(--background-color);
}

a {
    text-decoration: none;
    color: var(--primary-color);
    transition: var(--transition);
}

a:hover {
    color: var(--primary-dark);
}

ul {
    list-style: none;
}

img {
    max-width: 100%;
    height: auto;
}

.hidden {
    display: none !important;
}

.app-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

/* Button Styles */
.btn {
    display: inline-block;
    padding: 10px 20px;
    border-radius: var(--border-radius);
    font-weight: 600;
    text-align: center;
    cursor: pointer;
    transition: var(--transition);
    border: none;
    font-size: 1rem;
}

.btn-primary {
    background-color: var(--primary-color);
    color: var(--white);
}

.btn-primary:hover {
    background-color: var(--primary-dark);
    color: var(--white);
}

.btn-outline {
    background-color: transparent;
    color: var(--primary-color);
    border: 2px solid var(--primary-color);
}

.btn-outline:hover {
    background-color: var(--primary-color);
    color: var(--white);
}

.btn-large {
    padding: 12px 24px;
    font-size: 1.1rem;
}

.btn-block {
    display: block;
    width: 100%;
}

/* Navigation */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 5%;
    background-color: var(--white);
    box-shadow: var(--box-shadow);
    position: sticky;
    top: 0;
    z-index: 1000;
}

.logo h1 {
    color: var(--primary-color);
    font-size: 1.8rem;
    font-weight: 700;
}

.nav-links {
    display: flex;
    gap: 1.5rem;
}

.nav-links a {
    color: var(--text-color);
    font-weight: 500;
    padding: 0.5rem 0;
    position: relative;
}

.nav-links a.active,
.nav-links a:hover {
    color: var(--primary-color);
}

.nav-links a.active::after,
.nav-links a:hover::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--primary-color);
}

.auth-buttons {
    display: flex;
    gap: 1rem;
}

.user-menu {
    display: flex;
    align-items: center;
    gap: 1rem;
}

#user-greeting {
    font-weight: 500;
}

.menu-toggle {
    display: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--text-color);
}

/* Main Content */
main {
    flex: 1;
    padding: 2rem 5%;
}

.section {
  display: none;
}
.section.active {
  display: block;
}

/* Hero Section */
.hero {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    margin-bottom: 3rem;
}

.hero-content {
    flex: 1;
}

.hero-content h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: var(--text-color);
}

.hero-content p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: var(--text-light);
}

.hero-image {
    flex: 1;
    display: flex;
    justify-content: center;
}

.placeholder-image {
    background-color: #e0e0e0;
    width: 100%;
    max-width: 400px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--border-radius);
    color: var(--text-light);
    font-size: 1.2rem;
}

/* Features Section */
.features {
    margin-bottom: 3rem;
}

.features h2 {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 2rem;
}

.feature-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.feature-card {
    background-color: var(--white);
    padding: 2rem;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    text-align: center;
    transition: var(--transition);
}

.feature-card:hover {
    transform: translateY(-5px);
}

.feature-icon {
    font-size: 2.5rem;
    color: var(--primary-color);
    margin-bottom: 1rem;
}

.feature-card h3 {
    margin-bottom: 1rem;
}

/* How It Works Section */
.how-it-works {
    margin-bottom: 3rem;
}

.how-it-works h2 {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 2rem;
}

.steps {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.step {
    text-align: center;
    padding: 1.5rem;
    background-color: var(--white);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    position: relative;
}

.step-number {
    width: 40px;
    height: 40px;
    background-color: var(--primary-color);
    color: var(--white);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 1.2rem;
    margin: 0 auto 1rem;
}

.step h3 {
    margin-bottom: 1rem;
}

/* About Section */
#about-section {
    max-width: 1200px;
    margin: 0 auto;
}

#about-section h1 {
    text-align: center;
    margin-bottom: 1.5rem;
    font-size: 2.5rem;
}

#about-section > p {
    text-align: center;
    margin-bottom: 3rem;
    font-size: 1.1rem;
    color: var(--text-light);
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
}

.about-content {
    display: flex;
    gap: 3rem;
    align-items: center;
}

.about-text {
    flex: 1;
}

.about-text h2 {
    margin-bottom: 1rem;
    font-size: 1.8rem;
}

.about-text p {
    margin-bottom: 2rem;
}

.about-text ul {
    margin-left: 1.5rem;
    list-style-type: disc;
}

.about-text li {
    margin-bottom: 0.5rem;
}

.about-image {
    flex: 1;
    display: flex;
    justify-content: center;
}

/* Contact Section */
#contact-section {
    max-width: 1200px;
    margin: 0 auto;
}

#contact-section h1 {
    text-align: center;
    margin-bottom: 1.5rem;
    font-size: 2.5rem;
}

#contact-section > p {
    text-align: center;
    margin-bottom: 3rem;
    font-size: 1.1rem;
    color: var(--text-light);
}

.contact-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
}

.contact-form h2,
.contact-info h2 {
    margin-bottom: 1.5rem;
    font-size: 1.8rem;
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
}

.form-group input,
.form-group textarea,
.form-group select {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: var(--border-radius);
    font-family: inherit;
    font-size: 1rem;
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
    outline: none;
    border-color: var(--primary-color);
}

.info-item {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
}

.info-item i {
    font-size: 1.5rem;
    color: var(--primary-color);
    margin-right: 1rem;
    width: 30px;
    text-align: center;
}

.social-links {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
}

.social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: var(--primary-light);
    color: var(--primary-color);
    border-radius: 50%;
    transition: var(--transition);
}

.social-link:hover {
    background-color: var(--primary-color);
    color: var(--white);
}

/* Authentication Forms */
.auth-section {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem 0;
}

.auth-container {
    background-color: var(--white);
    padding: 2rem;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    width: 100%;
    max-width: 500px;
}

.auth-container h2 {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 2rem;
}

.bonus-alert {
    display: flex;
    align-items: center;
    background-color: var(--primary-light);
    color: var(--primary-dark);
    padding: 1rem;
    border-radius: var(--border-radius);
    margin-bottom: 2rem;
}

.bonus-alert i {
    font-size: 1.5rem;
    margin-right: 1rem;
}

.form-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
}

.remember-me,
.terms {
    display: flex;
    align-items: center;
}

.remember-me input,
.terms input {
    margin-right: 0.5rem;
}

.forgot-password {
    color: var(--primary-color);
}

.auth-footer {
    text-align: center;
    margin-top: 2rem;
    padding-top: 1rem;
    border-top: 1px solid #eee;
}

/* Dashboard */
.dashboard-container {
    max-width: 1200px;
    margin: 0 auto;
}

.dashboard-header {
    margin-bottom: 2rem;
}

.dashboard-header h1 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
}

.last-login {
    color: var(--text-light);
    font-size: 0.9rem;
}

.account-overview {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
    margin-bottom: 3rem;
}

.balance-card {
    background-color: var(--white);
    padding: 2rem;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    position: relative;
}

.balance-info h2 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
}

.balance-amount {
    display: flex;
    align-items: baseline;
    margin-bottom: 1.5rem;
}

.currency {
    font-size: 1.2rem;
    font-weight: 600;
    margin-right: 0.5rem;
}

.amount {
    font-size: 2.5rem;
    font-weight: 700;
}

.balance-breakdown {
    margin-bottom: 1.5rem;
}

.breakdown-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
}

.breakdown-label {
    color: var(--text-light);
}

.breakdown-value {
    font-weight: 600;
}

.bonus-status {
    display: flex;
    align-items: center;
    padding: 1rem;
    border-radius: var(--border-radius);
    background-color: var(--primary-light);
    color: var(--primary-dark);
}

.bonus-status i {
    font-size: 1.2rem;
    margin-right: 1rem;
}

.quick-actions {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
}

.action-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    background-color: var(--white);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    border: none;
    cursor: pointer;
    transition: var(--transition);
}

.action-btn:hover {
    transform: translateY(-5px);
    background-color: var(--primary-light);
}

.action-btn i {
    font-size: 1.5rem;
    color: var(--primary-color);
    margin-bottom: 0.5rem;
}

.transaction-section {
    background-color: var(--white);
    padding: 2rem;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
}

.transaction-section h2 {
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
}

.empty-transactions {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem 0;
    color: var(--text-light);
}

.empty-transactions i {
    font-size: 3rem;
    margin-bottom: 1rem;
}

/* Modal */
.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 2000;
    align-items: center;
    justify-content: center;
}

.modal.active {
    display: flex;
}

.modal-content {
    background-color: var(--white);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    width: 90%;
    max-width: 500px;
    animation: modalFadeIn 0.3s ease;
}

@keyframes modalFadeIn {
    from { opacity: 0; transform: translateY(-50px); }
    to { opacity: 1; transform: translateY(0); }
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    border-bottom: 1px solid #eee;
}

.modal-header h2 {
    font-size: 1.5rem;
}

.close-modal {
    font-size: 1.8rem;
    cursor: pointer;
    color: var(--text-light);
}

.modal-body {
    padding: 1.5rem;
}

/* Footer */
.footer {
    background-color: #333;
    color: #fff;
    padding: 3rem 5% 1rem;
    margin-top: 3rem;
}

.footer-content {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    gap: 3rem;
    margin-bottom: 2rem;
}

.footer-logo h2 {
    color: var(--primary-color);
    margin-bottom: 1rem;
}

.footer-links {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
}

.footer-column h3 {
    color: #fff;
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
}

.footer-column ul li {
    margin-bottom: 0.8rem;
}

.footer-column ul li a {
    color: #ccc;
}

.footer-column ul li a:hover {
    color: var(--primary-color);
}

.footer-newsletter h3 {
    color: #fff;
    margin-bottom: 1rem;
    font-size: 1.2rem;
}

.footer-newsletter p {
    margin-bottom: 1.5rem;
    color: #ccc;
}

.footer-newsletter form {
    display: flex;
}

.footer-newsletter input {
    flex: 1;
    padding: 0.8rem;
    border: none;
    border-radius: var(--border-radius) 0 0 var(--border-radius);
    font-family: inherit;
}

.footer-newsletter button {
    border-radius: 0 var(--border-radius) var(--border-radius) 0;
}

.footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 2rem;
    border-top: 1px solid #555;
}

.footer-bottom p {
    color: #ccc;
}

/* Notification System */
.notification-container {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 9999;
}

.notification {
    background-color: var(--white);
    color: var(--text-color);
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    display: flex;
    align-items: center;
    animation: notificationFadeIn 0.3s ease;
    max-width: 350px;
}

@keyframes notificationFadeIn {
    from { opacity: 0; transform: translateX(50px); }
    to { opacity: 1; transform: translateX(0); }
}

.notification.success {
    border-left: 4px solid var(--success-color);
}

.notification.error {
    border-left: 4px solid var(--error-color);
}

.notification.warning {
    border-left: 4px solid var(--warning-color);
}

.notification.info {
    border-left: 4px solid var(--info-color);
}

.notification-icon {
    margin-right: 1rem;
    font-size: 1.5rem;
}

.notification.success .notification-icon {
    color: var(--success-color);
}

.notification.error .notification-icon {
    color: var(--error-color);
}

.notification.warning .notification-icon {
    color: var(--warning-color);
}

.notification.info .notification-icon {
    color: var(--info-color);
}

.notification-content {
    flex: 1;
}

.notification-title {
    font-weight: 600;
    margin-bottom: 0.3rem;
}

.notification-close {
    cursor: pointer;
    color: var(--text-light);
    margin-left: 1rem;
}

/* Transaction Item */
.transaction-item {
    display: flex;
    align-items: center;
    padding: 1rem 0;
    border-bottom: 1px solid #eee;
}

.transaction-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: var(--primary-light);
    color: var(--primary-color);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
}

.transaction-deposit .transaction-icon {
    background-color: var(--primary-light);
    color: var(--primary-color);
}

.transaction-withdraw .transaction-icon {
    background-color: #FFEBEE;
    color: var(--error-color);
}

.transaction-bonus .transaction-icon {
    background-color: #FFF8E1;
    color: var(--secondary-color);
}

.transaction-info {
    flex: 1;
}

.transaction-title {
    font-weight: 600;
    margin-bottom: 0.3rem;
}

.transaction-date {
    font-size: 0.9rem;
    color: var(--text-light);
}

.transaction-amount {
    font-weight: 600;
}

.transaction-deposit .transaction-amount {
    color: var(--success-color);
}

.transaction-withdraw .transaction-amount {
    color: var(--error-color);
}

.transaction-bonus .transaction-amount {
    color: var(--secondary-color);
}

/* Responsive Styles */
@media (max-width: 1024px) {
    .footer-content {
        grid-template-columns: 1fr 1fr;
    }
    
    .footer-newsletter {
        grid-column: span 2;
    }
}

@media (max-width: 768px) {
    .hero {
        flex-direction: column;
    }
    
    .account-overview {
        grid-template-columns: 1fr;
    }
    
    .contact-container {
        grid-template-columns: 1fr;
    }
    
    .nav-links, .auth-buttons {
        display: none;
    }
    
    .menu-toggle {
        display: block;
    }
    
    .about-content {
        flex-direction: column;
    }
    
    .footer-content {
        grid-template-columns: 1fr;
    }
    
    .footer-links {
        grid-template-columns: 1fr 1fr;
    }
    
    .footer-newsletter {
        grid-column: auto;
    }
}

@media (max-width: 480px) {
    .footer-links {
        grid-template-columns: 1fr;
    }
    
    .footer-bottom {
        flex-direction: column;
        gap: 1rem;
    }
    
    .form-options {
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
    }
}
