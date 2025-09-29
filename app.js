// Mobile Wallet Application JavaScript

// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    // Navigation Elements
    const homeLink = document.getElementById('home-link');
    const aboutLink = document.getElementById('about-link');
    const contactLink = document.getElementById('contact-link');
    const loginBtn = document.getElementById('login-btn');
    const registerBtn = document.getElementById('register-btn');
    const getStartedBtn = document.getElementById('get-started-btn');
    const dashboardBtn = document.getElementById('dashboard-btn');
    const logoutBtn = document.getElementById('logout-btn');
    const toRegisterLink = document.getElementById('to-register-link');
    const toLoginLink = document.getElementById('to-login-link');
    const menuToggle = document.querySelector('.menu-toggle');
    
    // Section Elements
    const homeSection = document.getElementById('home-section');
    const aboutSection = document.getElementById('about-section');
    const contactSection = document.getElementById('contact-section');
    const loginSection = document.getElementById('login-section');
    const registerSection = document.getElementById('register-section');
    const dashboardSection = document.getElementById('dashboard-section');
    
    // Form Elements
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const depositForm = document.getElementById('deposit-form');
    const withdrawForm = document.getElementById('withdraw-form');
    const sendForm = document.getElementById('send-form');
    const contactForm = document.getElementById('contact-form');
    const newsletterForm = document.getElementById('newsletter-form');
    
    // Dashboard Elements
    const depositBtn = document.getElementById('deposit-btn');
    const withdrawBtn = document.getElementById('withdraw-btn');
    const sendBtn = document.getElementById('send-btn');
    const historyBtn = document.getElementById('history-btn');
    const accountBalance = document.getElementById('account-balance');
    const availableBalance = document.getElementById('available-balance');
    const bonusBalance = document.getElementById('bonus-balance');
    const bonusStatusLocked = document.getElementById('bonus-status-locked');
    const bonusStatusUnlocked = document.getElementById('bonus-status-unlocked');
    const transactionList = document.getElementById('transaction-list');
    const dashboardUserName = document.getElementById('dashboard-user-name');
    const lastLoginTime = document.getElementById('last-login-time');
    
    // Modal Elements
    const depositModal = document.getElementById('deposit-modal');
    const withdrawModal = document.getElementById('withdraw-modal');
    const sendModal = document.getElementById('send-modal');
    const closeModalButtons = document.querySelectorAll('.close-modal');
    
    // User Data (In a real app, this would come from a database)
    let currentUser = null;
    let users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Initialize the app
    function init() {
        checkLoggedInUser();
        setupEventListeners();
    }
    
    // Check if a user is logged in
    function checkLoggedInUser() {
        const loggedInUser = JSON.parse(localStorage.getItem('currentUser'));
        if (loggedInUser) {
            currentUser = loggedInUser;
            showLoggedInUI();
            updateDashboard();
        }
    }
    
    // Setup Event Listeners
    function setupEventListeners() {
        // Navigation
        homeLink.addEventListener('click', () => showSection(homeSection));
        aboutLink.addEventListener('click', () => showSection(aboutSection));
        contactLink.addEventListener('click', () => showSection(contactSection));
        loginBtn.addEventListener('click', () => showSection(loginSection));
        registerBtn.addEventListener('click', () => showSection(registerSection));
        getStartedBtn.addEventListener('click', () => showSection(registerSection));
        dashboardBtn.addEventListener('click', () => showSection(dashboardSection));
        logoutBtn.addEventListener('click', handleLogout);
        toRegisterLink.addEventListener('click', () => showSection(registerSection));
        toLoginLink.addEventListener('click', () => showSection(loginSection));
        
        // Forms
        if (loginForm) loginForm.addEventListener('submit', handleLogin);
        if (registerForm) registerForm.addEventListener('submit', handleRegister);
        if (depositForm) depositForm.addEventListener('submit', handleDeposit);
        if (withdrawForm) withdrawForm.addEventListener('submit', handleWithdraw);
        if (sendForm) sendForm.addEventListener('submit', handleSend);
        if (contactForm) contactForm.addEventListener('submit', handleContact);
        if (newsletterForm) newsletterForm.addEventListener('submit', handleNewsletter);
        
        // Dashboard Actions
        if (depositBtn) depositBtn.addEventListener('click', () => showModal(depositModal));
        if (withdrawBtn) withdrawBtn.addEventListener('click', () => showModal(withdrawModal));
        if (sendBtn) sendBtn.addEventListener('click', () => showModal(sendModal));
        if (historyBtn) historyBtn.addEventListener('click', showAllTransactions);
        
        // Modals
        closeModalButtons.forEach(button => {
            button.addEventListener('click', () => {
                const modal = button.closest('.modal');
                hideModal(modal);
            });
        });
        
        // Close modal when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                hideModal(e.target);
            }
        });
        
        // Mobile menu toggle
        if (menuToggle) {
            menuToggle.addEventListener('click', toggleMobileMenu);
        }
    }
    
    // Show a specific section
    function showSection(section) {
        // Hide all sections
        const sections = document.querySelectorAll('.section');
        sections.forEach(s => s.classList.remove('active'));

        // Show the selected section
        section.classList.add('active');

        // Debug log: show which section is now active
        console.log('Activated section:', section.id);
        // Log all active sections
        const activeSections = Array.from(document.querySelectorAll('.section.active')).map(s => s.id);
        console.log('Currently active sections:', activeSections);

        // Update active nav link
        const navLinks = document.querySelectorAll('.nav-links a');
        navLinks.forEach(link => link.classList.remove('active'));

        // Set active nav link based on section
        if (section === homeSection) {
            homeLink.classList.add('active');
        } else if (section === aboutSection) {
            aboutLink.classList.add('active');
        } else if (section === contactSection) {
            contactLink.classList.add('active');
        }

        // Close mobile menu if open
        const navLinksMenu = document.querySelector('.nav-links');
        if (navLinksMenu && navLinksMenu.classList.contains('active')) {
            navLinksMenu.classList.remove('active');
        }
    }
    
    // Toggle mobile menu
    function toggleMobileMenu() {
        const navLinks = document.querySelector('.nav-links');
        const authButtons = document.querySelector('.auth-buttons');
        const userMenu = document.querySelector('.user-menu');
        
        if (navLinks) navLinks.classList.toggle('active');
        if (authButtons && !currentUser) authButtons.classList.toggle('active');
        if (userMenu && currentUser) userMenu.classList.toggle('active');
    }
    
    // Show modal
    function showModal(modal) {
        modal.classList.add('active');
    }
    
    // Hide modal
    function hideModal(modal) {
        modal.classList.remove('active');
        
        // Reset form if exists
        const form = modal.querySelector('form');
        if (form) form.reset();
    }
    
    // Handle login
    function handleLogin(e) {
        e.preventDefault();
        
        const phone = document.getElementById('login-phone').value;
        const password = document.getElementById('login-password').value;
        
        // Find user
        const user = users.find(u => u.phone === phone && u.password === password);
        
        if (user) {
            // Update last login time
            user.lastLogin = new Date().toISOString();

            // Save to localStorage
            localStorage.setItem('users', JSON.stringify(users));
            localStorage.setItem('currentUser', JSON.stringify(user));

            currentUser = user;

            showLoggedInUI();
            updateDashboard();

            // Hide all sections, show only dashboard
            const sections = document.querySelectorAll('.section');
            sections.forEach(s => s.classList.remove('active'));
            dashboardSection.classList.add('active');

            showNotification('Login successful', 'Welcome back!', 'success');
        } else {
            showNotification('Login failed', 'Invalid phone number or password', 'error');
        }
    }
    
    // Handle register
    function handleRegister(e) {
        e.preventDefault();
        
        const name = document.getElementById('register-name').value;
        const phone = document.getElementById('register-phone').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        const confirmPassword = document.getElementById('register-confirm-password').value;
        
        // Validate passwords match
        if (password !== confirmPassword) {
            showNotification('Registration failed', 'Passwords do not match', 'error');
            return;
        }
        
        // Check if user already exists
        if (users.some(u => u.phone === phone)) {
            showNotification('Registration failed', 'Phone number already registered', 'error');
            return;
        }
        
        // Create new user with bonus
        const newUser = {
            id: generateUserId(),
            name,
            phone,
            email,
            password,
            balance: 0,
            bonus: 200, // 200 KES bonus
            bonusUnlocked: false,
            transactions: [
                {
                    id: generateTransactionId(),
                    type: 'bonus',
                    amount: 200,
                    date: new Date().toISOString(),
                    description: 'Welcome bonus'
                }
            ],
            createdAt: new Date().toISOString(),
            lastLogin: new Date().toISOString()
        };
        
        // Add user to users array
        users.push(newUser);
        
        // Save to localStorage
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('currentUser', JSON.stringify(newUser));
        
    currentUser = newUser;

    showLoggedInUI();
    updateDashboard();

    // Hide all sections, show only dashboard
    const sections = document.querySelectorAll('.section');
    sections.forEach(s => s.classList.remove('active'));
    dashboardSection.classList.add('active');

    showNotification('Registration successful', 'Welcome to M-Wallet! You received 200 KES bonus.', 'success');
    }
    
    // Handle deposit
    function handleDeposit(e) {
        e.preventDefault();
        
        const amount = parseFloat(document.getElementById('deposit-amount').value);
        const method = document.getElementById('deposit-method').value;
        
        if (!amount || amount <= 0) {
            showNotification('Deposit failed', 'Please enter a valid amount', 'error');
            return;
        }
        
        // Add deposit to user's balance
        currentUser.balance += amount;
        
        // Check if this deposit unlocks the bonus
        if (!currentUser.bonusUnlocked && amount >= 49) {
            currentUser.bonusUnlocked = true;
            showNotification('Bonus unlocked', 'Your 200 KES bonus is now available for withdrawal!', 'success');
        }
        
        // Add transaction
        const transaction = {
            id: generateTransactionId(),
            type: 'deposit',
            amount: amount,
            method: method,
            date: new Date().toISOString(),
            description: `Deposit via ${getMethodName(method)}`
        };
        
        currentUser.transactions.unshift(transaction);
        
        // Update localStorage
        updateUserData();
        
        // Update dashboard
        updateDashboard();
        
        // Hide modal
        hideModal(depositModal);
        
        showNotification('Deposit successful', `${amount} KES has been added to your account`, 'success');
    }
    
    // Handle withdraw
    function handleWithdraw(e) {
        e.preventDefault();
        
        const amount = parseFloat(document.getElementById('withdraw-amount').value);
        const method = document.getElementById('withdraw-method').value;
        const number = document.getElementById('withdraw-number').value;
        
        if (!amount || amount <= 0) {
            showNotification('Withdrawal failed', 'Please enter a valid amount', 'error');
            return;
        }
        
        // Calculate available balance (including bonus if unlocked)
        const availableAmount = currentUser.balance + (currentUser.bonusUnlocked ? currentUser.bonus : 0);
        
        if (amount > availableAmount) {
            showNotification('Withdrawal failed', 'Insufficient funds', 'error');
            return;
        }
        
        // Process withdrawal
        let fromBonus = 0;
        let fromBalance = 0;
        
        // First use regular balance
        if (amount <= currentUser.balance) {
            fromBalance = amount;
        } else {
            // Use all regular balance + part of bonus
            fromBalance = currentUser.balance;
            fromBonus = amount - currentUser.balance;
        }
        
        // Update balances
        currentUser.balance -= fromBalance;
        if (fromBonus > 0) {
            currentUser.bonus -= fromBonus;
        }
        
        // Add transaction
        const transaction = {
            id: generateTransactionId(),
            type: 'withdraw',
            amount: amount,
            method: method,
            date: new Date().toISOString(),
            description: `Withdrawal to ${getMethodName(method)}: ${number}`
        };
        
        currentUser.transactions.unshift(transaction);
        
        // Update localStorage
        updateUserData();
        
        // Update dashboard
        updateDashboard();
        
        // Hide modal
        hideModal(withdrawModal);
        
        showNotification('Withdrawal successful', `${amount} KES has been sent to your ${getMethodName(method)}`, 'success');
    }
    
    // Handle send money
    function handleSend(e) {
        e.preventDefault();
        
        const recipientPhone = document.getElementById('recipient-phone').value;
        const amount = parseFloat(document.getElementById('send-amount').value);
        const note = document.getElementById('send-note').value;
        
        if (!amount || amount <= 0) {
            showNotification('Transfer failed', 'Please enter a valid amount', 'error');
            return;
        }
        
        // Find recipient
        const recipient = users.find(u => u.phone === recipientPhone);
        
        if (!recipient) {
            showNotification('Transfer failed', 'Recipient not found', 'error');
            return;
        }
        
        // Calculate available balance (including bonus if unlocked)
        const availableAmount = currentUser.balance + (currentUser.bonusUnlocked ? currentUser.bonus : 0);
        
        if (amount > availableAmount) {
            showNotification('Transfer failed', 'Insufficient funds', 'error');
            return;
        }
        
        // Process transfer
        let fromBonus = 0;
        let fromBalance = 0;
        
        // First use regular balance
        if (amount <= currentUser.balance) {
            fromBalance = amount;
        } else {
            // Use all regular balance + part of bonus
            fromBalance = currentUser.balance;
            fromBonus = amount - currentUser.balance;
        }
        
        // Update sender balances
        currentUser.balance -= fromBalance;
        if (fromBonus > 0) {
            currentUser.bonus -= fromBonus;
        }
        
        // Update recipient balance
        recipient.balance += amount;
        
        // Add transaction for sender
        const senderTransaction = {
            id: generateTransactionId(),
            type: 'send',
            amount: amount,
            recipient: recipient.phone,
            recipientName: recipient.name,
            note: note,
            date: new Date().toISOString(),
            description: `Sent to ${recipient.name}`
        };
        
        currentUser.transactions.unshift(senderTransaction);
        
        // Add transaction for recipient
        const recipientTransaction = {
            id: generateTransactionId(),
            type: 'receive',
            amount: amount,
            sender: currentUser.phone,
            senderName: currentUser.name,
            note: note,
            date: new Date().toISOString(),
            description: `Received from ${currentUser.name}`
        };
        
        recipient.transactions.unshift(recipientTransaction);
        
        // Update localStorage
        updateUserData();
        
        // Update dashboard
        updateDashboard();
        
        // Hide modal
        hideModal(sendModal);
        
        showNotification('Transfer successful', `${amount} KES has been sent to ${recipient.name}`, 'success');
    }
    
    // Handle contact form
    function handleContact(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // In a real app, this would send the message to a server
        console.log('Contact form submitted:', { name, email, message });
        
        // Reset form
        e.target.reset();
        
        showNotification('Message sent', 'Thank you for your message. We will get back to you soon.', 'success');
    }
    
    // Handle newsletter subscription
    function handleNewsletter(e) {
        e.preventDefault();
        
        const email = e.target.querySelector('input[type="email"]').value;
        
        // In a real app, this would subscribe the email to a newsletter
        console.log('Newsletter subscription:', email);
        
        // Reset form
        e.target.reset();
        
        showNotification('Subscription successful', 'Thank you for subscribing to our newsletter!', 'success');
    }
    
    // Handle logout
    function handleLogout() {
        // Remove user from localStorage
        localStorage.removeItem('currentUser');
        
        currentUser = null;
        
        showLoggedOutUI();
        showSection(homeSection);
        showNotification('Logout successful', 'You have been logged out', 'info');
    }
    
    // Show logged in UI
    function showLoggedInUI() {
        const authButtons = document.querySelector('.auth-buttons');
        const userMenu = document.querySelector('.user-menu');
        const userGreeting = document.getElementById('user-greeting');
        
        if (authButtons) authButtons.classList.add('hidden');
        if (userMenu) {
            userMenu.classList.remove('hidden');
            userGreeting.textContent = `Hello, ${currentUser.name.split(' ')[0]}`;
        }
    }
    
    // Show logged out UI
    function showLoggedOutUI() {
        const authButtons = document.querySelector('.auth-buttons');
        const userMenu = document.querySelector('.user-menu');
        
        if (authButtons) authButtons.classList.remove('hidden');
        if (userMenu) userMenu.classList.add('hidden');
    }
    
    // Update dashboard with user data
    function updateDashboard() {
        if (!currentUser) return;
        
        // Update user info
        dashboardUserName.textContent = currentUser.name;
        
        // Format last login time
        const lastLogin = new Date(currentUser.lastLogin);
        lastLoginTime.textContent = formatDate(lastLogin);
        
        // Update balances
        accountBalance.textContent = (currentUser.balance + currentUser.bonus).toFixed(2);
        availableBalance.textContent = currentUser.balance.toFixed(2);
        bonusBalance.textContent = currentUser.bonus.toFixed(2);
        
        // Update bonus status
        if (currentUser.bonusUnlocked) {
            bonusStatusLocked.classList.add('hidden');
            bonusStatusUnlocked.classList.remove('hidden');
        } else {
            bonusStatusLocked.classList.remove('hidden');
            bonusStatusUnlocked.classList.add('hidden');
        }
        
        // Update transactions
        updateTransactionsList();
    }
    
    // Update transactions list
    function updateTransactionsList() {
        if (!currentUser || !transactionList) return;
        
        // Clear current list
        transactionList.innerHTML = '';
        
        if (currentUser.transactions.length === 0) {
            transactionList.innerHTML = `
                <div class="empty-transactions">
                    <i class="fas fa-receipt"></i>
                    <p>No transactions yet</p>
                </div>
            `;
            return;
        }
        
        // Show only the first 5 transactions
        const transactions = currentUser.transactions.slice(0, 5);
        
        transactions.forEach(transaction => {
            const transactionEl = createTransactionElement(transaction);
            transactionList.appendChild(transactionEl);
        });
        
        // Add "View All" button if there are more than 5 transactions
        if (currentUser.transactions.length > 5) {
            const viewAllBtn = document.createElement('button');
            viewAllBtn.className = 'btn btn-outline';
            viewAllBtn.textContent = 'View All Transactions';
            viewAllBtn.addEventListener('click', showAllTransactions);
            
            const viewAllContainer = document.createElement('div');
            viewAllContainer.className = 'view-all-container';
            viewAllContainer.style.textAlign = 'center';
            viewAllContainer.style.marginTop = '1rem';
            viewAllContainer.appendChild(viewAllBtn);
            
            transactionList.appendChild(viewAllContainer);
        }
    }
    
    // Show all transactions
    function showAllTransactions() {
        if (!currentUser || !transactionList) return;
        
        // Clear current list
        transactionList.innerHTML = '';
        
        if (currentUser.transactions.length === 0) {
            transactionList.innerHTML = `
                <div class="empty-transactions">
                    <i class="fas fa-receipt"></i>
                    <p>No transactions yet</p>
                </div>
            `;
            return;
        }
        
        // Show all transactions
        currentUser.transactions.forEach(transaction => {
            const transactionEl = createTransactionElement(transaction);
            transactionList.appendChild(transactionEl);
        });
    }
    
    // Create transaction element
    function createTransactionElement(transaction) {
        const transactionEl = document.createElement('div');
        transactionEl.className = `transaction-item transaction-${transaction.type}`;
        
        let icon, title, amount;
        
        switch (transaction.type) {
            case 'deposit':
                icon = 'arrow-down';
                title = transaction.description || 'Deposit';
                amount = `+${transaction.amount.toFixed(2)}`;
                break;
            case 'withdraw':
                icon = 'arrow-up';
                title = transaction.description || 'Withdrawal';
                amount = `-${transaction.amount.toFixed(2)}`;
                break;
            case 'bonus':
                icon = 'gift';
                title = transaction.description || 'Bonus';
                amount = `+${transaction.amount.toFixed(2)}`;
                break;
            case 'send':
                icon = 'paper-plane';
                title = transaction.description || `Sent to ${transaction.recipientName}`;
                amount = `-${transaction.amount.toFixed(2)}`;
                break;
            case 'receive':
                icon = 'envelope-open';
                title = transaction.description || `Received from ${transaction.senderName}`;
                amount = `+${transaction.amount.toFixed(2)}`;
                break;
            default:
                icon = 'exchange-alt';
                title = transaction.description || 'Transaction';
                amount = transaction.amount.toFixed(2);
        }
        
        transactionEl.innerHTML = `
            <div class="transaction-icon">
                <i class="fas fa-${icon}"></i>
            </div>
            <div class="transaction-info">
                <div class="transaction-title">${title}</div>
                <div class="transaction-date">${formatDate(new Date(transaction.date))}</div>
            </div>
            <div class="transaction-amount">${amount}</div>
        `;
        
        return transactionEl;
    }
    
    // Show notification
    function showNotification(title, message, type = 'info') {
        const notificationContainer = document.getElementById('notification-container');
        
        if (!notificationContainer) return;
        
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        
        let icon;
        switch (type) {
            case 'success':
                icon = 'check-circle';
                break;
            case 'error':
                icon = 'exclamation-circle';
                break;
            case 'warning':
                icon = 'exclamation-triangle';
                break;
            default:
                icon = 'info-circle';
        }
        
        notification.innerHTML = `
            <div class="notification-icon">
                <i class="fas fa-${icon}"></i>
            </div>
            <div class="notification-content">
                <div class="notification-title">${title}</div>
                <div class="notification-message">${message}</div>
            </div>
            <div class="notification-close">&times;</div>
        `;
        
        notificationContainer.appendChild(notification);
        
        // Add close event
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            notification.remove();
        });
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.remove();
        }, 5000);
    }
    
    // Helper Functions
    
    // Generate unique user ID
    function generateUserId() {
        return 'user_' + Date.now() + Math.random().toString(36).substr(2, 9);
    }
    
    // Generate unique transaction ID
    function generateTransactionId() {
        return 'txn_' + Date.now() + Math.random().toString(36).substr(2, 9);
    }
    
    // Format date
    function formatDate(date) {
        const options = { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric', 
            hour: '2-digit', 
            minute: '2-digit' 
        };
        return date.toLocaleDateString('en-US', options);
    }
    
    // Get payment method name
    function getMethodName(method) {
        switch (method) {
            case 'mpesa':
                return 'M-Pesa';
            case 'card':
                return 'Card';
            case 'bank':
                return 'Bank Transfer';
            default:
                return method;
        }
    }
    
    // Update user data in localStorage
    function updateUserData() {
        // Update user in users array
        const userIndex = users.findIndex(u => u.id === currentUser.id);
        if (userIndex !== -1) {
            users[userIndex] = currentUser;
        }
        
        // Save to localStorage
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
    }
    
    // Initialize the app
    init();
});