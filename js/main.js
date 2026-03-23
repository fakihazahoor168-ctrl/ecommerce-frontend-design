document.addEventListener('DOMContentLoaded', () => {
    /* 1. Product Quantity Selector */
    const qtyInput = document.getElementById('product-qty');
    const qtyPlus = document.getElementById('qty-plus');
    const qtyMinus = document.getElementById('qty-minus');

    if (qtyPlus && qtyMinus && qtyInput) {
        qtyPlus.addEventListener('click', () => {
            qtyInput.value = parseInt(qtyInput.value) + 1;
        });

        qtyMinus.addEventListener('click', () => {
            if (parseInt(qtyInput.value) > 1) {
                qtyInput.value = parseInt(qtyInput.value) - 1;
            }
        });
    }

    /* 2. Product Gallery Interactions */
    const thumbnails = document.querySelectorAll('.thumb');
    const mainImg = document.getElementById('main-product-image');

    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', () => {
            // Remove active class from all
            thumbnails.forEach(t => t.classList.remove('active'));
            // Add to current
            thumb.classList.add('active');
            // Change main image
            const newSrc = thumb.querySelector('img').src;
            mainImg.style.opacity = '0';
            setTimeout(() => {
                mainImg.src = newSrc;
                mainImg.style.opacity = '1';
            }, 200);
        });
    });

    /* 3. Tab Switching */
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabDisplay = document.getElementById('tab-display');

    if (tabBtns.length > 0 && tabDisplay) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                tabBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                const tabId = btn.getAttribute('data-tab');
                updateTabContent(tabId);
            });
        });
    }

    function updateTabContent(tabId) {
        if (!tabDisplay) return;
        const content = {
            'desc': `
                <h3>Product Overview</h3>
                <p>Experience the pinnacle of engineering with the TechNova Elite Laptop. Designed for professionals and enthusiasts alike, this powerhouse features a breathtaking 4K Liquid Retina display, the latest generation processor, and a battery life that keeps you productive from dawn till dusk.</p>
                <ul class="features-list">
                    <li><i class="ph ph-cpu"></i> Advanced Octa-core Processor for seamless multitasking</li>
                    <li><i class="ph ph-monitor"></i> 14-inch ProMotion display with 120Hz refresh rate</li>
                    <li><i class="ph ph-battery-high"></i> Up to 20 hours of battery life on a single charge</li>
                    <li><i class="ph ph-speaker-hifi"></i> Six-speaker sound system with force-cancelling woofers</li>
                    <li><i class="ph ph-wifi-high"></i> Wi-Fi 6E support for lightning-fast connectivity</li>
                </ul>
            `,
            'reviews': `
                <h3>Customer Reviews</h3>
                <div class="review-item" style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid var(--border-color);">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                        <strong>Alex Johnson</strong>
                        <span style="color: var(--secondary-color);">⭐⭐⭐⭐⭐</span>
                    </div>
                    <p>Absolutely incredible laptop! The screen is gorgeous and the performance is lightning fast. Best purchase of the year.</p>
                </div>
                <div class="review-item">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                        <strong>Sarah Miller</strong>
                        <span style="color: var(--secondary-color);">⭐⭐⭐⭐⭐</span>
                    </div>
                    <p>The battery life is what surprised me most. I can go a whole day without my charger. Highly recommend for students!</p>
                </div>
            `,
            'shipping': `
                <h3>Shipping & Returns</h3>
                <p>We offer free standard shipping on all orders over $500. For orders below $500, a flat rate of $15 applies.</p>
                <ul>
                    <li>Standard Shipping: 3-5 business days</li>
                    <li>Express Shipping: 1-2 business days ($25)</li>
                    <li>Returns: 30-day money-back guarantee</li>
                </ul>
            `
        };
        tabDisplay.innerHTML = content[tabId] || content['desc'];
    }

    /* 4. Search Bar Interactivity (Styled focus) */
    const searchInput = document.getElementById('search-input');
    const searchBar = document.getElementById('search-bar');

    if (searchInput && searchBar) {
        searchInput.addEventListener('focus', () => {
            searchBar.style.boxShadow = '0 0 0 4px rgba(13, 110, 253, 0.2)';
            searchBar.style.borderColor = 'var(--primary-hover)';
        });

        searchInput.addEventListener('blur', () => {
            searchBar.style.boxShadow = 'none';
            searchBar.style.borderColor = 'var(--primary-color)';
        });
    }

    /* 5. Size Selection Interactivity */
    const sizeSelect = document.getElementById('size-select');
    if (sizeSelect) {
        sizeSelect.addEventListener('change', (e) => {
            console.log('Selected Size:', e.target.value);
            // Optionally update price UI
            const priceEl = document.querySelector('.current-price');
            if (e.target.value === '1tb') {
                priceEl.innerText = '$1,549.00';
            } else if (e.target.value === '2tb') {
                priceEl.innerText = '$1,799.00';
            } else if (e.target.value === '256gb') {
                priceEl.innerText = '$1,199.00';
            } else {
                priceEl.innerText = '$1,299.00';
            }
        });
    }
});
