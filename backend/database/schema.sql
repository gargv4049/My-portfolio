-- Portfolio Database Schema
-- Run this script to create all necessary tables

-- Create database
CREATE DATABASE IF NOT EXISTS portfolio_db;
USE portfolio_db;

-- Contact messages table
CREATE TABLE IF NOT EXISTS contact_messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    subject VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Projects table
CREATE TABLE IF NOT EXISTS projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    image VARCHAR(500),
    tags JSON, -- Store as JSON array
    category ENUM('frontend', 'backend', 'fullstack') NOT NULL,
    link VARCHAR(500),
    github VARCHAR(500),
    is_featured BOOLEAN DEFAULT FALSE,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Skills table
CREATE TABLE IF NOT EXISTS skills (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    category VARCHAR(50) NOT NULL,
    proficiency INT NOT NULL CHECK (proficiency >= 0 AND proficiency <= 100),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Visitor analytics table
CREATE TABLE IF NOT EXISTS visitor_logs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ip_address VARCHAR(45),
    page VARCHAR(255) DEFAULT '/',
    referrer VARCHAR(500),
    user_agent TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample data
-- Sample projects
INSERT INTO projects (title, description, image, tags, category, link, github, is_featured) VALUES
('E-Commerce Platform', 'Full-stack e-commerce platform with real-time inventory, payment integration, and admin dashboard.', '🛍️', '["React", "Node.js", "PostgreSQL", "Stripe", "API Integration"]', 'fullstack', '#', '#', true),
('Task Management App', 'Collaborative task management tool with real-time updates, team collaboration, and advanced filtering.', '✅', '["React", "Firebase", "Tailwind CSS", "Node.js"]', 'frontend', '#', '#', true),
('Weather Dashboard', 'Real-time weather application with location-based forecasting and beautiful UI animations.', '⛅', '["React", "API Integration", "Framer Motion"]', 'frontend', '#', '#', false),
('API Gateway', 'Microservices API gateway with authentication, rate limiting, and comprehensive logging.', '🔌', '["Node.js", "Express", "MongoDB"]', 'backend', '#', '#', false),
('Social Media Analytics', 'Real-time social media analytics dashboard with data visualization and reporting.', '📊', '["React", "D3.js", "Node.js", "MongoDB", "API Integration"]', 'fullstack', '#', '#', true),
('Code Review Tool', 'Automated code review tool with AI-powered suggestions and team collaboration features.', '🔍', '["Python", "React", "FastAPI", "PostgreSQL", "Machine Learning"]', 'fullstack', '#', '#', false);

-- Sample skills
INSERT INTO skills (name, category, proficiency) VALUES
('React', 'Frontend', 95),
('TypeScript', 'Frontend', 90),
('Tailwind CSS', 'Frontend', 95),
('Framer Motion', 'Frontend', 85),
('Node.js', 'Backend', 88),
('Express.js', 'Backend', 85),
('PostgreSQL', 'Backend', 80),
('MongoDB', 'Backend', 82),
('Git & GitHub', 'Tools', 92),
('REST APIs', 'Tools', 90),
('Docker', 'Tools', 75),
('AWS', 'Tools', 70);

-- Create indexes for better performance
CREATE INDEX idx_contact_messages_created_at ON contact_messages(created_at);
CREATE INDEX idx_projects_category ON projects(category);
CREATE INDEX idx_projects_featured ON projects(is_featured);
CREATE INDEX idx_skills_category ON skills(category);
CREATE INDEX idx_visitor_logs_created_at ON visitor_logs(created_at);

-- Create view for dashboard analytics
CREATE OR REPLACE VIEW dashboard_stats AS
SELECT
    (SELECT COUNT(*) FROM contact_messages WHERE DATE(created_at) = CURDATE()) as today_messages,
    (SELECT COUNT(*) FROM contact_messages WHERE is_read = FALSE) as unread_messages,
    (SELECT COUNT(*) FROM projects WHERE is_active = 1) as total_projects,
    (SELECT COUNT(*) FROM visitor_logs WHERE DATE(created_at) = CURDATE()) as today_visitors;

SELECT 'Database setup completed successfully!' as status;