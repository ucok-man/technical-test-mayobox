-- +goose Up
-- +goose StatementBegin

-- Insert 5 users
INSERT INTO users (id, username, email, image_url, address_line, city, province, postal_code, country) VALUES
(
  '550e8400-e29b-41d4-a716-446655440001',
  'RobloxMaster99',
  'robloxmaster99@email.com',
  '/black-hair-boy.png',
  'Jl. Sudirman No. 123',
  'Jakarta Selatan',
  'DKI Jakarta',
  '12190',
  'Indonesia'
),
(
  '550e8400-e29b-41d4-a716-446655440002',
  'GamerGirl2024',
  'gamergirl2024@email.com',
  '/black-hair-boy.png',
  'Jl. Gatot Subroto No. 45',
  'Surabaya',
  'Jawa Timur',
  '60271',
  'Indonesia'
),
(
  '550e8400-e29b-41d4-a716-446655440003',
  'ProPlayer88',
  'proplayer88@email.com',
  '/black-hair-boy.png',
  'Jl. Raya Bandung No. 78',
  'Bandung',
  'Jawa Barat',
  '40115',
  'Indonesia'
),
(
  '550e8400-e29b-41d4-a716-446655440004',
  'RobuxHunter',
  'robuxhunter@email.com',
  '/black-hair-boy.png',
  'Jl. Diponegoro No. 234',
  'Semarang',
  'Jawa Tengah',
  '50241',
  'Indonesia'
),
(
  '550e8400-e29b-41d4-a716-446655440005',
  'BuilderKing',
  'builderking@email.com',
  '/black-hair-boy.png',
  'Jl. Ahmad Yani No. 567',
  'Medan',
  'Sumatera Utara',
  '20151',
  'Indonesia'
);

-- Insert 5 testimonies
INSERT INTO testimonies (id, user_id, testimoni, icon_url) VALUES
(
  '660e8400-e29b-41d4-a716-446655440001',
  '550e8400-e29b-41d4-a716-446655440001',
  'Mayobox is the best! I bought Robux here and the process was super fast. Within minutes, my Robux was already in my account. Highly recommended for all Roblox players!',
  '/mayo-testimoni-icon-1.png'
),
(
  '660e8400-e29b-41d4-a716-446655440002',
  '550e8400-e29b-41d4-a716-446655440002',
  'Amazing service! The prices are competitive and customer support is very responsive. I had a question about my order and they helped me right away. Will definitely buy again!',
  '/mayo-testimoni-icon-2.png'
),
(
  '660e8400-e29b-41d4-a716-446655440003',
  '550e8400-e29b-41d4-a716-446655440003',
  'Trusted seller! I have been using Mayobox for 6 months now and never had any issues. The transaction is secure and they always deliver on time. Five stars!',
  '/mayo-testimoni-icon-1.png'
),
(
  '660e8400-e29b-41d4-a716-446655440004',
  '550e8400-e29b-41d4-a716-446655440004',
  'Fast and reliable! I needed Robux urgently for a limited item and Mayobox delivered in less than 5 minutes. The payment methods are also very convenient. Thank you Mayobox!',
  '/mayo-testimoni-icon-2.png'
),
(
  '660e8400-e29b-41d4-a716-446655440005',
  '550e8400-e29b-41d4-a716-446655440005',
  'Great experience overall! The website is easy to navigate and the checkout process is smooth. I appreciate the transparent pricing with no hidden fees. Definitely my go-to store for Roblox items!',
  '/mayo-testimoni-icon-1.png'
);

-- Insert 5 FAQs
INSERT INTO faqs (id, question, display_order) VALUES
(
  '770e8400-e29b-41d4-a716-446655440001',
  'How long does it take to receive my Robux after payment?',
  1
),
(
  '770e8400-e29b-41d4-a716-446655440002',
  'What payment methods do you accept?',
  2
),
(
  '770e8400-e29b-41d4-a716-446655440003',
  'Is it safe to buy Robux from Mayobox?',
  3
),
(
  '770e8400-e29b-41d4-a716-446655440004',
  'What should I do if I do not receive my order?',
  4
),
(
  '770e8400-e29b-41d4-a716-446655440005',
  'Can I get a refund if I change my mind?',
  5
);

-- Insert 2 answers for each FAQ (10 total answers)
INSERT INTO faq_answers (id, faq_id, short, long, display_order) VALUES
-- FAQ 1 Answers
(
  '880e8400-e29b-41d4-a716-446655440001',
  '770e8400-e29b-41d4-a716-446655440001',
  'Usually 5-15 minutes',
  'Most orders are processed automatically and delivered within 5-15 minutes after payment confirmation. During peak hours, it may take up to 30 minutes.',
  1
),
(
  '880e8400-e29b-41d4-a716-446655440002',
  '770e8400-e29b-41d4-a716-446655440001',
  'Instant for most cases',
  'We use an automated system that delivers your Robux instantly in most cases. However, manual verification may be required for first-time buyers or large orders, which can take up to 1 hour.',
  2
),
-- FAQ 2 Answers
(
  '880e8400-e29b-41d4-a716-446655440003',
  '770e8400-e29b-41d4-a716-446655440002',
  'Bank Transfer, E-Wallet, Credit/Debit Card',
  'We accept various payment methods including Bank Transfer (BCA, Mandiri, BNI, BRI), E-Wallets (GoPay, OVO, DANA, ShopeePay), and Credit/Debit Cards (Visa, Mastercard).',
  1
),
(
  '880e8400-e29b-41d4-a716-446655440004',
  '770e8400-e29b-41d4-a716-446655440002',
  'QRIS also available',
  'You can also pay using QRIS for a quick and easy transaction. Simply scan the QR code with your banking app or e-wallet and complete the payment.',
  2
),
-- FAQ 3 Answers
(
  '880e8400-e29b-41d4-a716-446655440005',
  '770e8400-e29b-41d4-a716-446655440003',
  'Yes, 100% safe and legal',
  'Mayobox only uses official Roblox methods to deliver Robux. We never ask for your password and all transactions are protected with SSL encryption. Your account safety is our priority.',
  1
),
(
  '880e8400-e29b-41d4-a716-446655440006',
  '770e8400-e29b-41d4-a716-446655440003',
  'Trusted by thousands',
  'We have served thousands of satisfied customers with a 4.9/5 rating. All our processes comply with Roblox Terms of Service, ensuring your account remains safe.',
  2
),
-- FAQ 4 Answers
(
  '880e8400-e29b-41d4-a716-446655440007',
  '770e8400-e29b-41d4-a716-446655440004',
  'Contact our customer support',
  'If you have not received your order within the estimated time, please contact our customer support through WhatsApp or email with your order ID. We will check and resolve the issue immediately.',
  1
),
(
  '880e8400-e29b-41d4-a716-446655440008',
  '770e8400-e29b-41d4-a716-446655440004',
  'Check your spam folder',
  'Sometimes, order confirmation emails may land in your spam folder. Please check there first. Also, ensure you provided the correct Roblox username during checkout.',
  2
),
-- FAQ 5 Answers
(
  '880e8400-e29b-41d4-a716-446655440009',
  '770e8400-e29b-41d4-a716-446655440005',
  'Refunds available before delivery',
  'You can request a refund if the Robux has not been delivered yet. Once delivered, refunds are not possible as Robux cannot be reversed. Please contact support within 1 hour of purchase.',
  1
),
(
  '880e8400-e29b-41d4-a716-446655440010',
  '770e8400-e29b-41d4-a716-446655440005',
  'Store credit as alternative',
  'If you are not eligible for a refund, we can offer store credit that you can use for future purchases. This credit never expires and can be used for any product on Mayobox.',
  2
);

-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin

-- Delete in reverse order to respect foreign key constraints
DELETE FROM faq_answers WHERE faq_id IN (
  '770e8400-e29b-41d4-a716-446655440001',
  '770e8400-e29b-41d4-a716-446655440002',
  '770e8400-e29b-41d4-a716-446655440003',
  '770e8400-e29b-41d4-a716-446655440004',
  '770e8400-e29b-41d4-a716-446655440005'
);

DELETE FROM faqs WHERE id IN (
  '770e8400-e29b-41d4-a716-446655440001',
  '770e8400-e29b-41d4-a716-446655440002',
  '770e8400-e29b-41d4-a716-446655440003',
  '770e8400-e29b-41d4-a716-446655440004',
  '770e8400-e29b-41d4-a716-446655440005'
);

DELETE FROM testimonies WHERE user_id IN (
  '550e8400-e29b-41d4-a716-446655440001',
  '550e8400-e29b-41d4-a716-446655440002',
  '550e8400-e29b-41d4-a716-446655440003',
  '550e8400-e29b-41d4-a716-446655440004',
  '550e8400-e29b-41d4-a716-446655440005'
);

DELETE FROM users WHERE id IN (
  '550e8400-e29b-41d4-a716-446655440001',
  '550e8400-e29b-41d4-a716-446655440002',
  '550e8400-e29b-41d4-a716-446655440003',
  '550e8400-e29b-41d4-a716-446655440004',
  '550e8400-e29b-41d4-a716-446655440005'
);

-- +goose StatementEnd