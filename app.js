// Super Admin Platform Application State
class SuperAdminApp {
  constructor() {
    this.currentUser = null;
    this.charts = {};
    
    // Platform data from the provided JSON
    this.platformMetrics = {
      totalVendors: 342,
      activeVendors: 318,
      pendingApplications: 12,
      suspendedVendors: 7,
      totalRevenue: 2450000,
      monthlyRecurringRevenue: 185000,
      averageRevenuePerUser: 7500,
      churnRate: 2.3,
      growthRate: 23.5,
      totalTransactions: 125000,
      successfulPayments: 98.7,
      overdueAccounts: 15
    };
    
    this.recentActivity = [
      {
        id: "ACT001",
        timestamp: "2025-09-04T22:30:00Z",
        type: "vendor_approval",
        description: "Vendor 'Digital Commerce Solutions' approved by Admin John",
        severity: "info",
        userId: "admin_001"
      },
      {
        id: "ACT002",
        timestamp: "2025-09-04T22:15:00Z",
        type: "payment_failed",
        description: "Payment failed for vendor 'Fashion Central' - ₹16,000",
        severity: "warning",
        userId: "system"
      },
      {
        id: "ACT003",
        timestamp: "2025-09-04T21:45:00Z",
        type: "plan_upgrade",
        description: "Vendor 'TechMart Electronics' upgraded to Premium plan",
        severity: "success",
        userId: "system"
      },
      {
        id: "ACT004",
        timestamp: "2025-09-04T21:30:00Z",
        type: "moderator_added",
        description: "New moderator 'Sarah Johnson' added with Finance Manager role",
        severity: "info",
        userId: "admin_001"
      },
      {
        id: "ACT005",
        timestamp: "2025-09-04T21:00:00Z",
        type: "settings_changed",
        description: "Platform settings updated by Super Admin",
        severity: "info",
        userId: "admin_001"
      }
    ];
    
    this.vendorApplications = [
      {
        id: "VA001",
        businessName: "Digital Commerce Solutions",
        ownerName: "Rohit Sharma",
        email: "rohit@digitalcommerce.com",
        phone: "+91-9876543210",
        gstNumber: "27AABCD1234R1ZX",
        address: "Plot 123, Sector 15, Gurgaon, Haryana - 122001",
        businessType: "E-commerce Platform",
        appliedDate: "2025-09-03",
        status: "pending",
        requestedPlan: "premium",
        projectedMonthlyRevenue: 150000,
        documents: [
          {name: "GST Certificate", status: "verified", uploadDate: "2025-09-03"},
          {name: "Business Registration", status: "verified", uploadDate: "2025-09-03"},
          {name: "Bank Statement", status: "pending", uploadDate: "2025-09-03"},
          {name: "Identity Proof", status: "verified", uploadDate: "2025-09-03"}
        ],
        notes: "Established e-commerce business with strong online presence",
        riskScore: "Low",
        creditRating: "A+"
      },
      {
        id: "VA002",
        businessName: "Metro Restaurant Chain",
        ownerName: "Priya Patel",
        email: "priya@metrorestaurants.com",
        phone: "+91-8765432109",
        gstNumber: "19AABCM9876R1Z8",
        address: "45 Commercial Street, Bangalore, Karnataka - 560001",
        businessType: "Restaurant Chain",
        appliedDate: "2025-09-02",
        status: "under_review",
        requestedPlan: "standard",
        projectedMonthlyRevenue: 85000,
        documents: [
          {name: "GST Certificate", status: "verified", uploadDate: "2025-09-02"},
          {name: "FSSAI License", status: "verified", uploadDate: "2025-09-02"},
          {name: "Trade License", status: "pending", uploadDate: "2025-09-02"}
        ],
        notes: "Multi-location restaurant chain looking for unified billing",
        riskScore: "Medium",
        creditRating: "B+"
      },
      {
        id: "VA003",
        businessName: "HealthCare Plus",
        ownerName: "Dr. Rajesh Kumar",
        email: "rajesh@healthcareplus.com",
        phone: "+91-7654321098",
        gstNumber: "29AABCH9876R1Z9",
        address: "Medical Complex, Sector 22, Noida, UP - 201301",
        businessType: "Healthcare",
        appliedDate: "2025-09-01",
        status: "pending",
        requestedPlan: "standard",
        projectedMonthlyRevenue: 95000,
        documents: [
          {name: "GST Certificate", status: "verified", uploadDate: "2025-09-01"},
          {name: "Medical License", status: "verified", uploadDate: "2025-09-01"},
          {name: "Drug License", status: "pending", uploadDate: "2025-09-01"}
        ],
        notes: "Multi-specialty healthcare provider with pharmacy",
        riskScore: "Low",
        creditRating: "A"
      }
    ];
    
    this.activeVendors = [
      {
        id: "V001",
        businessName: "TechMart Electronics",
        ownerName: "Amit Kumar",
        email: "amit@techmart.com",
        currentPlan: "premium",
        subscriptionStart: "2024-06-15",
        subscriptionEnd: "2025-06-15",
        monthlyFee: 15000,
        lastPayment: "2025-08-15",
        nextDue: "2025-09-15",
        paymentStatus: "current",
        monthlyRevenue: 125000,
        agentsCount: 8,
        transactionsThisMonth: 1250,
        status: "active",
        riskLevel: "low"
      },
      {
        id: "V002",
        businessName: "Fashion Central",
        ownerName: "Sneha Reddy",
        email: "sneha@fashioncentral.com",
        currentPlan: "standard",
        subscriptionStart: "2024-08-01",
        subscriptionEnd: "2025-08-01",
        monthlyFee: 8000,
        lastPayment: "2025-07-15",
        nextDue: "2025-09-01",
        paymentStatus: "overdue",
        overdueAmount: 16000,
        daysPastDue: 3,
        monthlyRevenue: 65000,
        agentsCount: 3,
        transactionsThisMonth: 450,
        status: "active",
        riskLevel: "medium"
      },
      {
        id: "V003",
        businessName: "QuickMart Groceries",
        ownerName: "Vikash Singh",
        email: "vikash@quickmart.com",
        currentPlan: "basic",
        subscriptionStart: "2024-09-01",
        subscriptionEnd: "2025-09-01",
        monthlyFee: 3000,
        lastPayment: "2025-08-01",
        nextDue: "2025-09-01",
        paymentStatus: "current",
        monthlyRevenue: 45000,
        agentsCount: 2,
        transactionsThisMonth: 320,
        status: "active",
        riskLevel: "low"
      }
    ];
    
    this.moderatorRoles = [
      {
        id: "MOD001",
        name: "John Williams",
        email: "john@billmaster.com",
        role: "Senior Operations Manager",
        permissions: [
          "vendor_management",
          "payment_processing",
          "analytics_full",
          "settings_read"
        ],
        status: "active",
        lastLogin: "2025-09-04T20:30:00Z",
        createdDate: "2024-12-15"
      },
      {
        id: "MOD002",
        name: "Sarah Johnson",
        email: "sarah@billmaster.com",
        role: "Customer Support Lead",
        permissions: [
          "vendor_support",
          "escalation_handling",
          "analytics_basic"
        ],
        status: "active",
        lastLogin: "2025-09-04T18:45:00Z",
        createdDate: "2025-01-10"
      }
    ];
    
    this.subscriptionPlans = [
      {
        id: "basic",
        name: "Basic Plan",
        monthlyPrice: 2999,
        yearlyPrice: 29990,
        features: [
          "Up to 2 billing agents",
          "Basic inventory management",
          "Standard receipt templates",
          "Email support",
          "Up to 1000 products",
          "Basic analytics"
        ],
        limits: {
          agents: 2,
          products: 1000,
          transactions: 5000,
          storage: "1GB"
        },
        isPopular: false
      },
      {
        id: "standard",
        name: "Standard Plan",
        monthlyPrice: 7999,
        yearlyPrice: 79990,
        features: [
          "Up to 5 billing agents",
          "Advanced inventory management",
          "Custom receipt templates",
          "Phone & email support",
          "Up to 5000 products",
          "Advanced analytics",
          "Multi-location support"
        ],
        limits: {
          agents: 5,
          products: 5000,
          transactions: 25000,
          storage: "5GB"
        },
        isPopular: true
      },
      {
        id: "premium",
        name: "Premium Plan",
        monthlyPrice: 14999,
        yearlyPrice: 149990,
        features: [
          "Unlimited billing agents",
          "Complete inventory management",
          "Custom branding & templates",
          "Priority support",
          "Unlimited products",
          "Premium analytics & reports",
          "API access",
          "Third-party integrations"
        ],
        limits: {
          agents: -1,
          products: -1,
          transactions: -1,
          storage: "50GB"
        },
        isPopular: false
      }
    ];
    
    this.revenueAnalytics = {
      monthlyRevenue: [
        {month: "Jan", revenue: 1200000, vendors: 280},
        {month: "Feb", revenue: 1350000, vendors: 295},
        {month: "Mar", revenue: 1580000, vendors: 312},
        {month: "Apr", revenue: 1750000, vendors: 325},
        {month: "May", revenue: 1920000, vendors: 338},
        {month: "Jun", revenue: 2100000, vendors: 342},
        {month: "Jul", revenue: 2250000, vendors: 345},
        {month: "Aug", revenue: 2450000, vendors: 342}
      ],
      planDistribution: {
        basic: 45,
        standard: 65,
        premium: 32
      },
      paymentMethods: {
        creditCard: 45,
        bankTransfer: 35,
        digitalWallet: 15,
        other: 5
      }
    };
    
    this.auditEntries = [
      {
        id: "AUD001",
        timestamp: "2025-09-04T22:30:00Z",
        type: "login",
        action: "Super Admin logged in",
        user: "admin@billmaster.com",
        ipAddress: "192.168.1.1",
        details: "Successful login from secure location"
      },
      {
        id: "AUD002",
        timestamp: "2025-09-04T22:15:00Z",
        type: "vendor",
        action: "Vendor application approved",
        user: "admin@billmaster.com",
        ipAddress: "192.168.1.1",
        details: "Digital Commerce Solutions application approved"
      },
      {
        id: "AUD003",
        timestamp: "2025-09-04T21:45:00Z",
        type: "payment",
        action: "Payment reminder sent",
        user: "system",
        ipAddress: "internal",
        details: "Automated payment reminders sent to 15 vendors"
      },
      {
        id: "AUD004",
        timestamp: "2025-09-04T21:30:00Z",
        type: "settings",
        action: "Subscription plan updated",
        user: "admin@billmaster.com",
        ipAddress: "192.168.1.1",
        details: "Premium plan pricing updated"
      }
    ];
  }
}

// Initialize global app instance
const app = new SuperAdminApp();

// Utility Functions
function formatCurrency(amount) {
  return `₹${amount.toLocaleString('en-IN', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
}

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

function formatDateTime(dateString) {
  return new Date(dateString).toLocaleString('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    if (document.body.contains(toast)) {
      document.body.removeChild(toast);
    }
  }, 4000);
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('hidden');
  }
}

// Authentication Manager
class AuthManager {
  static login(email, password, twoFactorCode) {
    console.log('Login attempt:', { email, password, twoFactorCode });
    
    if (email === 'admin@billmaster.com' && password === 'superadmin123' && twoFactorCode === '123456') {
      app.currentUser = {
        name: 'Super Admin',
        email: email,
        role: 'superadmin'
      };
      console.log('Login successful');
      return true;
    }
    console.log('Login failed');
    return false;
  }

  static logout() {
    app.currentUser = null;
    PageManager.showPage('loginPage');
    showToast('Logged out successfully', 'info');
  }
}

// Page Manager
class PageManager {
  static showPage(pageId) {
    console.log('Showing page:', pageId);
    document.querySelectorAll('.page').forEach(page => {
      page.classList.remove('active');
    });
    
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
      targetPage.classList.add('active');
      console.log('Page displayed successfully');
    } else {
      console.error('Page not found:', pageId);
    }
  }

  static showSection(sectionId) {
    console.log('Showing section:', sectionId);
    document.querySelectorAll('.content-section').forEach(section => {
      section.classList.remove('active');
    });
    
    document.querySelectorAll('.nav-btn').forEach(btn => {
      btn.classList.remove('active');
    });
    
    const targetSection = document.getElementById(sectionId + 'Section');
    if (targetSection) {
      targetSection.classList.add('active');
      console.log('Section displayed successfully');
    }
    
    const navBtn = document.querySelector(`[data-section="${sectionId}"]`);
    if (navBtn) {
      navBtn.classList.add('active');
    }
    
    // Load section-specific content
    DashboardManager.loadSectionContent(sectionId);
  }
}

// Dashboard Manager
class DashboardManager {
  static updatePlatformMetrics() {
    console.log('Updating platform metrics');
    const elements = {
      'totalVendors': app.platformMetrics.totalVendors,
      'activeVendors': app.platformMetrics.activeVendors,
      'pendingApplications': app.platformMetrics.pendingApplications,
      'totalRevenue': formatCurrency(app.platformMetrics.totalRevenue),
      'monthlyRecurringRevenue': formatCurrency(app.platformMetrics.monthlyRecurringRevenue),
      'overdueAccounts': app.platformMetrics.overdueAccounts
    };
    
    Object.entries(elements).forEach(([id, value]) => {
      const element = document.getElementById(id);
      if (element) {
        element.textContent = value;
      }
    });
  }

  static renderActivityFeed() {
    const feed = document.getElementById('activityFeed');
    if (!feed) return;
    
    feed.innerHTML = app.recentActivity.map(activity => `
      <div class="activity-item activity-severity-${activity.severity}">
        <div class="activity-icon">${this.getActivityIcon(activity.type)}</div>
        <div class="activity-content">
          <p>${activity.description}</p>
          <small>${formatDateTime(activity.timestamp)}</small>
        </div>
      </div>
    `).join('');
  }

  static getActivityIcon(type) {
    const icons = {
      'vendor_approval': '✅',
      'payment_failed': '💳',
      'plan_upgrade': '📈',
      'moderator_added': '👤',
      'settings_changed': '⚙️'
    };
    return icons[type] || '📋';
  }

  static createRevenueChart() {
    const ctx = document.getElementById('revenueChart');
    if (!ctx) return;

    if (app.charts.revenueChart) {
      app.charts.revenueChart.destroy();
    }

    app.charts.revenueChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: app.revenueAnalytics.monthlyRevenue.map(item => item.month),
        datasets: [{
          label: 'Monthly Revenue',
          data: app.revenueAnalytics.monthlyRevenue.map(item => item.revenue),
          borderColor: '#1FB8CD',
          backgroundColor: 'rgba(31, 184, 205, 0.1)',
          fill: true,
          tension: 0.4,
          pointBackgroundColor: '#1FB8CD',
          pointBorderColor: '#ffffff',
          pointBorderWidth: 2,
          pointRadius: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: function(value) {
                return formatCurrency(value);
              }
            },
            grid: {
              color: 'rgba(0, 0, 0, 0.1)'
            }
          },
          x: {
            grid: {
              color: 'rgba(0, 0, 0, 0.1)'
            }
          }
        }
      }
    });
  }

  static createPlanDistributionChart() {
    const ctx = document.getElementById('planDistributionChart');
    if (!ctx) return;

    if (app.charts.planDistributionChart) {
      app.charts.planDistributionChart.destroy();
    }

    app.charts.planDistributionChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Basic Plan', 'Standard Plan', 'Premium Plan'],
        datasets: [{
          data: [
            app.revenueAnalytics.planDistribution.basic,
            app.revenueAnalytics.planDistribution.standard,
            app.revenueAnalytics.planDistribution.premium
          ],
          backgroundColor: ['#FFC185', '#1FB8CD', '#B4413C'],
          borderWidth: 0,
          hoverOffset: 10
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              padding: 20,
              usePointStyle: true
            }
          }
        }
      }
    });
  }

  static createPaymentMethodsChart() {
    const ctx = document.getElementById('paymentMethodsChart');
    if (!ctx) return;

    if (app.charts.paymentMethodsChart) {
      app.charts.paymentMethodsChart.destroy();
    }

    app.charts.paymentMethodsChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Credit Card', 'Bank Transfer', 'Digital Wallet', 'Other'],
        datasets: [{
          data: [
            app.revenueAnalytics.paymentMethods.creditCard,
            app.revenueAnalytics.paymentMethods.bankTransfer,
            app.revenueAnalytics.paymentMethods.digitalWallet,
            app.revenueAnalytics.paymentMethods.other
          ],
          backgroundColor: ['#5D878F', '#DB4545', '#D2BA4C', '#ECEBD5'],
          borderWidth: 0,
          hoverOffset: 8
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              padding: 15,
              usePointStyle: true
            }
          }
        }
      }
    });
  }

  static loadSectionContent(sectionId) {
    console.log('Loading section content for:', sectionId);
    switch(sectionId) {
      case 'dashboard':
        this.updatePlatformMetrics();
        this.renderActivityFeed();
        setTimeout(() => {
          this.createRevenueChart();
          this.createPlanDistributionChart();
          this.createPaymentMethodsChart();
        }, 100);
        break;
      case 'vendorApplications':
        VendorManager.renderApplications();
        break;
      case 'activeVendors':
        VendorManager.renderActiveVendors();
        break;
      case 'paymentManagement':
        PaymentManager.renderPaymentManagement();
        break;
      case 'moderatorRoles':
        ModeratorManager.renderModerators();
        break;
      case 'subscriptionPlans':
        PlanManager.renderPlans();
        break;
      case 'analytics':
        AnalyticsManager.renderAnalytics();
        break;
      case 'auditTrail':
        AuditManager.renderAuditTrail();
        break;
    }
  }
}

// Vendor Manager
class VendorManager {
  static renderApplications() {
    console.log('Rendering vendor applications');
    const grid = document.getElementById('applicationsGrid');
    if (!grid) return;
    
    const pendingApplications = app.vendorApplications.filter(
      application => application.status === 'pending' || application.status === 'under_review'
    );
    
    if (pendingApplications.length === 0) {
      grid.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">📋</div>
          <p>No pending applications</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = pendingApplications.map(application => {
      const verifiedDocs = application.documents.filter(doc => doc.status === 'verified').length;
      const totalDocs = application.documents.length;
      
      return `
        <div class="application-card">
          <div class="application-header">
            <div>
              <h4 class="application-title">${application.businessName}</h4>
              <p class="application-owner">Owner: ${application.ownerName}</p>
            </div>
            <span class="status status--${application.status === 'pending' ? 'warning' : 'info'}">
              ${application.status === 'pending' ? 'Pending Review' : 'Under Review'}
            </span>
          </div>
          
          <div class="application-details">
            <div class="detail-item">
              <span class="detail-label">Email</span>
              <span class="detail-value">${application.email}</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Business Type</span>
              <span class="detail-value">${application.businessType}</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Requested Plan</span>
              <span class="detail-value">${application.requestedPlan}</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Applied Date</span>
              <span class="detail-value">${formatDate(application.appliedDate)}</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Projected Revenue</span>
              <span class="detail-value">${formatCurrency(application.projectedMonthlyRevenue)}/month</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Documents</span>
              <span class="detail-value">${verifiedDocs}/${totalDocs} verified</span>
            </div>
          </div>
          
          <div class="application-actions">
            <button class="btn btn--primary btn--sm" onclick="VendorManager.viewApplicationDetail('${application.id}')">
              📋 Review Details
            </button>
            <button class="btn btn--success btn--sm" onclick="VendorManager.approveApplication('${application.id}')">
              ✅ Approve
            </button>
            <button class="btn btn--error btn--sm" onclick="VendorManager.rejectApplication('${application.id}')">
              ❌ Reject
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  static viewApplicationDetail(applicationId) {
    const application = app.vendorApplications.find(app => app.id === applicationId);
    if (!application) return;

    const modal = document.getElementById('applicationModal');
    const modalBody = document.getElementById('applicationModalBody');
    
    modalBody.innerHTML = `
      <div class="application-review-details">
        <div class="form-section">
          <h4>Business Information</h4>
          <div class="form-grid">
            <div>
              <strong>Business Name:</strong><br>
              ${application.businessName}
            </div>
            <div>
              <strong>Owner Name:</strong><br>
              ${application.ownerName}
            </div>
            <div>
              <strong>Email:</strong><br>
              ${application.email}
            </div>
            <div>
              <strong>Phone:</strong><br>
              ${application.phone}
            </div>
            <div>
              <strong>GST Number:</strong><br>
              ${application.gstNumber}
            </div>
            <div>
              <strong>Business Type:</strong><br>
              ${application.businessType}
            </div>
          </div>
          
          <div style="margin-top: 16px;">
            <strong>Address:</strong><br>
            ${application.address}
          </div>
        </div>

        <div class="form-section">
          <h4>Documents Status</h4>
          <div style="display: flex; flex-direction: column; gap: 8px;">
            ${application.documents.map(doc => `
              <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px; background: var(--color-bg-1); border-radius: 6px;">
                <span>${doc.name}</span>
                <span class="status status--${doc.status === 'verified' ? 'success' : 'warning'}">
                  ${doc.status}
                </span>
                <small style="color: var(--color-text-secondary);">
                  ${formatDate(doc.uploadDate)}
                </small>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="form-section">
          <h4>Business Details</h4>
          <div class="form-grid">
            <div>
              <strong>Requested Plan:</strong><br>
              <span class="status status--info">${application.requestedPlan}</span>
            </div>
            <div>
              <strong>Projected Revenue:</strong><br>
              ${formatCurrency(application.projectedMonthlyRevenue)}/month
            </div>
            <div>
              <strong>Risk Score:</strong><br>
              <span class="status status--${application.riskScore === 'Low' ? 'success' : application.riskScore === 'Medium' ? 'warning' : 'error'}">
                ${application.riskScore}
              </span>
            </div>
            <div>
              <strong>Credit Rating:</strong><br>
              ${application.creditRating || 'Not Available'}
            </div>
          </div>
        </div>

        <div class="form-section">
          <h4>Internal Notes</h4>
          <div style="background: var(--color-bg-2); padding: 12px; border-radius: 6px;">
            ${application.notes}
          </div>
        </div>

        <div class="modal-actions">
          <button class="btn btn--success" onclick="VendorManager.approveApplication('${application.id}'); closeModal('applicationModal')">
            ✅ Approve Application
          </button>
          <button class="btn btn--error" onclick="VendorManager.rejectApplication('${application.id}'); closeModal('applicationModal')">
            ❌ Reject Application
          </button>
          <button class="btn btn--outline" onclick="closeModal('applicationModal')">Close</button>
        </div>
      </div>
    `;
    
    modal.classList.remove('hidden');
  }

  static approveApplication(applicationId) {
    const application = app.vendorApplications.find(app => app.id === applicationId);
    if (application) {
      application.status = 'approved';
      
      // Add to active vendors
      const newVendor = {
        id: `V${String(app.activeVendors.length + 1).padStart(3, '0')}`,
        businessName: application.businessName,
        ownerName: application.ownerName,
        email: application.email,
        currentPlan: application.requestedPlan,
        subscriptionStart: new Date().toISOString().split('T')[0],
        subscriptionEnd: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        monthlyFee: application.requestedPlan === 'basic' ? 2999 : application.requestedPlan === 'standard' ? 7999 : 14999,
        paymentStatus: 'current',
        monthlyRevenue: application.projectedMonthlyRevenue,
        agentsCount: 0,
        transactionsThisMonth: 0,
        status: 'active',
        riskLevel: application.riskScore.toLowerCase()
      };
      
      app.activeVendors.push(newVendor);
      app.platformMetrics.activeVendors++;
      app.platformMetrics.pendingApplications--;
      
      this.renderApplications();
      DashboardManager.updatePlatformMetrics();
      showToast(`${application.businessName} application approved successfully!`, 'success');
    }
  }

  static rejectApplication(applicationId) {
    const application = app.vendorApplications.find(app => app.id === applicationId);
    if (application) {
      application.status = 'rejected';
      app.platformMetrics.pendingApplications--;
      
      this.renderApplications();
      DashboardManager.updatePlatformMetrics();
      showToast(`${application.businessName} application rejected`, 'warning');
    }
  }

  static renderActiveVendors() {
    const tbody = document.getElementById('vendorsTableBody');
    if (!tbody) return;
    
    tbody.innerHTML = app.activeVendors.map(vendor => `
      <tr>
        <td><input type="checkbox" class="vendor-checkbox" data-id="${vendor.id}"></td>
        <td>
          <div class="vendor-info">
            <div class="vendor-name">${vendor.businessName}</div>
            <div class="vendor-details">${vendor.ownerName} • ${vendor.email}</div>
          </div>
        </td>
        <td>
          <div>
            <span class="status status--info">${vendor.currentPlan}</span>
            <div style="font-size: 11px; margin-top: 4px; color: var(--color-text-secondary);">
              ${formatDate(vendor.subscriptionStart)} - ${formatDate(vendor.subscriptionEnd)}
            </div>
          </div>
        </td>
        <td>
          <div>
            <span class="status status--${vendor.paymentStatus === 'current' ? 'success' : vendor.paymentStatus === 'overdue' ? 'error' : 'warning'}">
              ${vendor.paymentStatus.toUpperCase()}
            </span>
            <div style="font-weight: 500; margin-top: 4px;">
              ${formatCurrency(vendor.monthlyFee)}/month
            </div>
            ${vendor.paymentStatus === 'overdue' ? 
              `<div style="font-size: 11px; color: var(--color-error);">
                Overdue: ${formatCurrency(vendor.overdueAmount || 0)}
              </div>` : 
              `<div style="font-size: 11px; color: var(--color-text-secondary);">
                Last: ${formatDate(vendor.lastPayment || vendor.subscriptionStart)}
              </div>`
            }
          </div>
        </td>
        <td>
          <div>
            <div style="font-weight: 500;">${formatCurrency(vendor.monthlyRevenue)}/mo</div>
            <div style="font-size: 11px; color: var(--color-text-secondary);">
              ${vendor.transactionsThisMonth} transactions • ${vendor.agentsCount} agents
            </div>
          </div>
        </td>
        <td>
          <span class="status status--${vendor.status === 'active' ? 'success' : 'error'}">
            ${vendor.status.toUpperCase()}
          </span>
        </td>
        <td>
          <div style="display: flex; gap: 4px;">
            <button class="btn btn--sm btn--secondary" onclick="VendorManager.editVendor('${vendor.id}')">
              Edit
            </button>
            <button class="btn btn--sm ${vendor.status === 'active' ? 'btn--warning' : 'btn--success'}" 
                    onclick="VendorManager.toggleVendorStatus('${vendor.id}')">
              ${vendor.status === 'active' ? 'Suspend' : 'Activate'}
            </button>
          </div>
        </td>
      </tr>
    `).join('');
  }

  static editVendor(vendorId) {
    const vendor = app.activeVendors.find(v => v.id === vendorId);
    if (!vendor) return;
    
    showToast(`Edit functionality for ${vendor.businessName} - Coming Soon!`, 'info');
  }

  static toggleVendorStatus(vendorId) {
    const vendor = app.activeVendors.find(v => v.id === vendorId);
    if (vendor) {
      vendor.status = vendor.status === 'active' ? 'suspended' : 'active';
      if (vendor.status === 'suspended') {
        app.platformMetrics.activeVendors--;
        app.platformMetrics.suspendedVendors++;
      } else {
        app.platformMetrics.activeVendors++;
        app.platformMetrics.suspendedVendors--;
      }
      
      this.renderActiveVendors();
      DashboardManager.updatePlatformMetrics();
      showToast(`${vendor.businessName} status changed to ${vendor.status}`, 'info');
    }
  }
}

// Payment Manager
class PaymentManager {
  static renderPaymentManagement() {
    console.log('Rendering payment management');
    const paymentsList = document.getElementById('paymentsList');
    if (!paymentsList) return;
    
    const overdueVendors = app.activeVendors.filter(v => v.paymentStatus === 'overdue');
    const currentVendors = app.activeVendors.filter(v => v.paymentStatus === 'current');
    
    paymentsList.innerHTML = `
      <h4 style="color: var(--color-error); margin-bottom: 16px;">Overdue Payments (${overdueVendors.length})</h4>
      ${overdueVendors.map(vendor => `
        <div class="payment-item" style="border-left: 4px solid var(--color-error);">
          <div>
            <strong>${vendor.businessName}</strong>
            <div style="font-size: 12px; color: var(--color-text-secondary); margin-top: 4px;">
              Due: ${formatDate(vendor.nextDue)} • ${vendor.daysPastDue || 0} days overdue
            </div>
          </div>
          <div style="text-align: right;">
            <div style="font-size: 18px; font-weight: bold; color: var(--color-error);">
              ${formatCurrency(vendor.overdueAmount || vendor.monthlyFee)}
            </div>
            <div style="font-size: 12px; color: var(--color-text-secondary);">
              ${vendor.currentPlan} plan
            </div>
          </div>
          <div>
            <button class="btn btn--sm btn--error" onclick="PaymentManager.sendPaymentReminder('${vendor.id}')">
              📧 Send Reminder
            </button>
            <button class="btn btn--sm btn--success" onclick="PaymentManager.markAsPaid('${vendor.id}')">
              ✅ Mark Paid
            </button>
          </div>
        </div>
      `).join('')}
      
      <h4 style="color: var(--color-success); margin: 32px 0 16px 0;">Current Payments (${currentVendors.length})</h4>
      ${currentVendors.slice(0, 5).map(vendor => `
        <div class="payment-item" style="border-left: 4px solid var(--color-success);">
          <div>
            <strong>${vendor.businessName}</strong>
            <div style="font-size: 12px; color: var(--color-text-secondary); margin-top: 4px;">
              Next due: ${formatDate(vendor.nextDue)}
            </div>
          </div>
          <div style="text-align: right;">
            <div style="font-size: 18px; font-weight: bold; color: var(--color-success);">
              ${formatCurrency(vendor.monthlyFee)}
            </div>
            <div style="font-size: 12px; color: var(--color-text-secondary);">
              ${vendor.currentPlan} plan
            </div>
          </div>
          <div>
            <span class="status status--success">Current</span>
          </div>
        </div>
      `).join('')}
    `;
  }

  static sendPaymentReminder(vendorId) {
    const vendor = app.activeVendors.find(v => v.id === vendorId);
    if (vendor) {
      showToast(`Payment reminder sent to ${vendor.businessName}`, 'success');
    }
  }

  static markAsPaid(vendorId) {
    const vendor = app.activeVendors.find(v => v.id === vendorId);
    if (vendor) {
      vendor.paymentStatus = 'current';
      vendor.lastPayment = new Date().toISOString().split('T')[0];
      vendor.nextDue = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
      delete vendor.overdueAmount;
      delete vendor.daysPastDue;
      
      app.platformMetrics.overdueAccounts--;
      
      this.renderPaymentManagement();
      DashboardManager.updatePlatformMetrics();
      showToast(`${vendor.businessName} payment marked as paid`, 'success');
    }
  }
}

// Moderator Manager
class ModeratorManager {
  static renderModerators() {
    const grid = document.getElementById('moderatorsGrid');
    if (!grid) return;
    
    grid.innerHTML = app.moderatorRoles.map(moderator => `
      <div class="moderator-card">
        <div class="moderator-header">
          <div class="moderator-avatar">${moderator.name.split(' ').map(n => n[0]).join('').toUpperCase()}</div>
          <div class="moderator-info">
            <h4>${moderator.name}</h4>
            <div class="moderator-role">${moderator.role}</div>
          </div>
        </div>
        
        <div>
          <strong>Email:</strong> ${moderator.email}<br>
          <strong>Status:</strong> 
          <span class="status status--${moderator.status === 'active' ? 'success' : 'error'}">
            ${moderator.status.toUpperCase()}
          </span><br>
          <strong>Last Login:</strong> ${formatDateTime(moderator.lastLogin)}<br>
          <strong>Created:</strong> ${formatDate(moderator.createdDate)}
        </div>
        
        <div class="permissions-list">
          ${moderator.permissions.map(permission => `
            <span class="permission-tag">${permission.replace('_', ' ')}</span>
          `).join('')}
        </div>
        
        <div style="display: flex; gap: 8px; margin-top: 16px;">
          <button class="btn btn--sm btn--secondary" onclick="ModeratorManager.editModerator('${moderator.id}')">
            Edit
          </button>
          <button class="btn btn--sm ${moderator.status === 'active' ? 'btn--warning' : 'btn--success'}" 
                  onclick="ModeratorManager.toggleModeratorStatus('${moderator.id}')">
            ${moderator.status === 'active' ? 'Deactivate' : 'Activate'}
          </button>
          <button class="btn btn--sm btn--error" onclick="ModeratorManager.deleteModerator('${moderator.id}')">
            Delete
          </button>
        </div>
      </div>
    `).join('');
  }

  static editModerator(moderatorId) {
    const moderator = app.moderatorRoles.find(m => m.id === moderatorId);
    if (!moderator) return;
    
    showToast(`Edit functionality for ${moderator.name} - Coming Soon!`, 'info');
  }

  static toggleModeratorStatus(moderatorId) {
    const moderator = app.moderatorRoles.find(m => m.id === moderatorId);
    if (moderator) {
      moderator.status = moderator.status === 'active' ? 'inactive' : 'active';
      this.renderModerators();
      showToast(`${moderator.name} status changed to ${moderator.status}`, 'info');
    }
  }

  static deleteModerator(moderatorId) {
    if (confirm('Are you sure you want to delete this moderator?')) {
      const index = app.moderatorRoles.findIndex(m => m.id === moderatorId);
      if (index !== -1) {
        const moderator = app.moderatorRoles[index];
        app.moderatorRoles.splice(index, 1);
        this.renderModerators();
        showToast(`${moderator.name} deleted successfully`, 'success');
      }
    }
  }
}

// Plan Manager
class PlanManager {
  static renderPlans() {
    const container = document.getElementById('plansContainer');
    if (!container) return;
    
    container.innerHTML = app.subscriptionPlans.map((plan, index) => `
      <div class="plan-card ${plan.isPopular ? 'popular' : ''}">
        <div class="plan-header">
          <h3 class="plan-name">${plan.name}</h3>
          <div class="plan-price">${formatCurrency(plan.monthlyPrice)}</div>
          <div class="plan-duration">per month</div>
        </div>
        
        <ul class="plan-features">
          ${plan.features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
        
        <div class="plan-actions">
          <button class="btn btn--outline btn--sm" onclick="PlanManager.editPlan('${plan.id}')">
            Edit Plan
          </button>
          <button class="btn btn--error btn--sm" onclick="PlanManager.deletePlan('${plan.id}')">
            Delete
          </button>
        </div>
      </div>
    `).join('');
  }

  static editPlan(planId) {
    const plan = app.subscriptionPlans.find(p => p.id === planId);
    if (!plan) return;
    
    showToast(`Edit functionality for ${plan.name} - Coming Soon!`, 'info');
  }

  static deletePlan(planId) {
    if (confirm('Are you sure you want to delete this plan?')) {
      const index = app.subscriptionPlans.findIndex(p => p.id === planId);
      if (index !== -1) {
        const plan = app.subscriptionPlans[index];
        app.subscriptionPlans.splice(index, 1);
        this.renderPlans();
        showToast(`${plan.name} deleted successfully`, 'success');
      }
    }
  }
}

// Analytics Manager
class AnalyticsManager {
  static renderAnalytics() {
    setTimeout(() => {
      this.createMonthlyRevenueChart();
      this.createVendorGrowthChart();
    }, 100);
  }

  static createMonthlyRevenueChart() {
    const ctx = document.getElementById('monthlyRevenueChart');
    if (!ctx) return;

    if (app.charts.monthlyRevenueChart) {
      app.charts.monthlyRevenueChart.destroy();
    }

    app.charts.monthlyRevenueChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: app.revenueAnalytics.monthlyRevenue.map(item => item.month),
        datasets: [{
          label: 'Monthly Revenue',
          data: app.revenueAnalytics.monthlyRevenue.map(item => item.revenue),
          backgroundColor: '#1FB8CD',
          borderRadius: 8,
          maxBarThickness: 50
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: function(value) {
                return formatCurrency(value);
              }
            }
          }
        }
      }
    });
  }

  static createVendorGrowthChart() {
    const ctx = document.getElementById('vendorGrowthChart');
    if (!ctx) return;

    if (app.charts.vendorGrowthChart) {
      app.charts.vendorGrowthChart.destroy();
    }

    app.charts.vendorGrowthChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: app.revenueAnalytics.monthlyRevenue.map(item => item.month),
        datasets: [{
          label: 'Active Vendors',
          data: app.revenueAnalytics.monthlyRevenue.map(item => item.vendors),
          borderColor: '#B4413C',
          backgroundColor: 'rgba(180, 65, 60, 0.1)',
          fill: true,
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}

// Audit Manager
class AuditManager {
  static renderAuditTrail() {
    const auditTrail = document.getElementById('auditTrail');
    if (!auditTrail) return;
    
    auditTrail.innerHTML = app.auditEntries.map(entry => `
      <div class="audit-entry ${entry.type}">
        <div class="audit-timestamp">
          ${formatDateTime(entry.timestamp)}
        </div>
        <div class="audit-details">
          <div class="audit-action">${entry.action}</div>
          <div class="audit-user">
            User: ${entry.user} | IP: ${entry.ipAddress}
            ${entry.details ? `<br>Details: ${entry.details}` : ''}
          </div>
        </div>
      </div>
    `).join('');
  }
}

// Global Functions for onclick handlers
function refreshDashboard() {
  DashboardManager.updatePlatformMetrics();
  DashboardManager.renderActivityFeed();
  showToast('Dashboard refreshed', 'success');
}

function exportDashboardReport() {
  showToast('Dashboard report exported to CSV', 'success');
}

function bulkApproveApplications() {
  const pendingCount = app.vendorApplications.filter(app => app.status === 'pending').length;
  if (pendingCount > 0) {
    app.vendorApplications.forEach(application => {
      if (application.status === 'pending') {
        VendorManager.approveApplication(application.id);
      }
    });
    showToast(`${pendingCount} applications approved in bulk`, 'success');
  } else {
    showToast('No pending applications to approve', 'info');
  }
}

function exportApplications() {
  showToast('Applications exported to CSV', 'success');
}

function resetOnboardingForm() {
  const form = document.getElementById('vendorOnboardingForm');
  if (form) {
    form.reset();
    showToast('Form cleared', 'info');
  }
}

function exportVendors() {
  showToast('Vendor list exported to CSV', 'success');
}

function sendPaymentReminders() {
  const overdueCount = app.activeVendors.filter(v => v.paymentStatus === 'overdue').length;
  showToast(`Payment reminders sent to ${overdueCount} vendors`, 'success');
}

function exportPayments() {
  showToast('Payment data exported to CSV', 'success');
}

function addModerator() {
  const modal = document.getElementById('moderatorModal');
  if (modal) {
    modal.classList.remove('hidden');
  }
}

function createPlan() {
  showToast('Create plan functionality - Coming Soon!', 'info');
}

function generateAnalyticsReport() {
  showToast('Analytics report generated and exported', 'success');
}

function exportAuditLog() {
  showToast('Audit log exported to CSV', 'success');
}

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, initializing Super Admin Platform');
  initializeEventListeners();
  
  // Show login page initially
  PageManager.showPage('loginPage');
});

function initializeEventListeners() {
  console.log('Initializing event listeners');
  
  // Login form
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    console.log('Login form found, adding event listener');
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      console.log('Login form submitted');
      
      const emailEl = document.getElementById('adminEmail');
      const passwordEl = document.getElementById('adminPassword');
      const twoFactorEl = document.getElementById('twoFactorCode');
      
      if (!emailEl || !passwordEl || !twoFactorEl) {
        console.error('Login form elements not found');
        showToast('Login form error', 'error');
        return;
      }
      
      const email = emailEl.value.trim();
      const password = passwordEl.value.trim();
      const twoFactorCode = twoFactorEl.value.trim();
      
      console.log('Attempting login with:', { email, password: '***', twoFactorCode });
      
      if (AuthManager.login(email, password, twoFactorCode)) {
        console.log('Login successful, showing dashboard');
        PageManager.showPage('superAdminDashboard');
        PageManager.showSection('dashboard');
        showToast('Welcome to Super Admin Platform!', 'success');
      } else {
        console.log('Login failed');
        showToast('Invalid credentials. Please check your login details.', 'error');
      }
    });
  } else {
    console.error('Login form not found');
  }

  // Logout button
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', function(e) {
      e.preventDefault();
      AuthManager.logout();
    });
  }

  // Navigation buttons
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const section = this.dataset.section;
      console.log('Navigation clicked:', section);
      PageManager.showSection(section);
    });
  });

  // Vendor onboarding form
  const vendorOnboardingForm = document.getElementById('vendorOnboardingForm');
  if (vendorOnboardingForm) {
    vendorOnboardingForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(this);
      const vendorData = {};
      for (let [key, value] of formData.entries()) {
        vendorData[key] = value;
      }
      
      // Create new vendor application
      const newApplication = {
        id: `VA${String(app.vendorApplications.length + 1).padStart(3, '0')}`,
        businessName: vendorData.businessName,
        ownerName: vendorData.ownerName,
        email: vendorData.email,
        phone: vendorData.phone,
        gstNumber: vendorData.gstNumber,
        address: vendorData.address,
        businessType: vendorData.businessType,
        appliedDate: new Date().toISOString().split('T')[0],
        status: 'approved', // Auto-approve for manually added vendors
        requestedPlan: vendorData.requestedPlan,
        projectedMonthlyRevenue: parseInt(vendorData.projectedMonthlyRevenue) || 0,
        documents: [
          {name: "Manual Verification", status: "verified", uploadDate: new Date().toISOString().split('T')[0]}
        ],
        notes: vendorData.notes || "Manually onboarded by Super Admin",
        riskScore: vendorData.riskScore || "Low",
        creditRating: "A"
      };
      
      app.vendorApplications.push(newApplication);
      
      // Auto-approve the application
      VendorManager.approveApplication(newApplication.id);
      
      this.reset();
      showToast(`${vendorData.businessName} onboarded successfully!`, 'success');
      
      // Switch to active vendors section
      PageManager.showSection('activeVendors');
    });
  }

  // Moderator form
  const moderatorForm = document.getElementById('moderatorForm');
  if (moderatorForm) {
    moderatorForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(this);
      const moderatorData = {};
      const permissions = [];
      
      for (let [key, value] of formData.entries()) {
        if (key === 'permissions') {
          permissions.push(value);
        } else {
          moderatorData[key] = value;
        }
      }
      
      const newModerator = {
        id: `MOD${String(app.moderatorRoles.length + 1).padStart(3, '0')}`,
        name: moderatorData.name,
        email: moderatorData.email,
        role: moderatorData.role,
        permissions: permissions,
        status: 'active',
        lastLogin: null,
        createdDate: new Date().toISOString().split('T')[0]
      };
      
      app.moderatorRoles.push(newModerator);
      
      closeModal('moderatorModal');
      ModeratorManager.renderModerators();
      this.reset();
      
      showToast(`${moderatorData.name} added as moderator successfully!`, 'success');
    });
  }

  // Modal close handlers
  document.querySelectorAll('.close-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      this.closest('.modal').classList.add('hidden');
    });
  });

  // Modal backdrop close
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', function(e) {
      if (e.target === this) {
        this.classList.add('hidden');
      }
    });
  });
  
  console.log('Event listeners initialized successfully');
}

// Make functions globally available
window.VendorManager = VendorManager;
window.PaymentManager = PaymentManager;
window.ModeratorManager = ModeratorManager;
window.PlanManager = PlanManager;
window.AnalyticsManager = AnalyticsManager;
window.AuditManager = AuditManager;
window.closeModal = closeModal;
window.refreshDashboard = refreshDashboard;
window.exportDashboardReport = exportDashboardReport;
window.bulkApproveApplications = bulkApproveApplications;
window.exportApplications = exportApplications;
window.resetOnboardingForm = resetOnboardingForm;
window.exportVendors = exportVendors;
window.sendPaymentReminders = sendPaymentReminders;
window.exportPayments = exportPayments;
window.addModerator = addModerator;
window.createPlan = createPlan;
window.generateAnalyticsReport = generateAnalyticsReport;
window.exportAuditLog = exportAuditLog;