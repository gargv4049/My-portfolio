# Portfolio Backend API

A robust Node.js/Express backend API for the CS Portfolio with MySQL database integration, providing contact forms, project management, analytics, and admin functionality.

## 🚀 Features

- ✅ **Contact Form API** - Handle form submissions with validation
- ✅ **Projects Management** - CRUD operations for portfolio projects
- ✅ **Skills Management** - Dynamic skills data
- ✅ **Visitor Analytics** - Track page views and user behavior
- ✅ **Admin Dashboard** - Manage contacts and view statistics
- ✅ **Security** - Rate limiting, CORS, input validation
- ✅ **Database Integration** - MySQL with connection pooling
- ✅ **Error Handling** - Comprehensive error responses
- ✅ **Logging** - Request logging and error tracking

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MySQL 8.0+
- **Security**: Helmet, CORS, Rate Limiting
- **Validation**: Express Validator
- **Environment**: dotenv

## 📁 Project Structure

```
backend/
├── config/
│   └── database.js          # Database connection configuration
├── database/
│   ├── schema.sql           # Database schema and sample data
│   └── setup.js             # Database initialization script
├── routes/
│   ├── api.js               # Public API routes
│   └── admin.js             # Admin-only routes
├── .env.example             # Environment variables template
├── package.json             # Dependencies and scripts
├── server.js                # Main application server
└── README.md                # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- MySQL 8.0+
- npm or yarn

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Environment Setup
```bash
cp .env.example .env
```

Edit `.env` with your database credentials:
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=portfolio_db
PORT=5000
```

### 3. Database Setup
```bash
# Make sure MySQL is running, then:
node database/setup.js
```

### 4. Start Server
```bash
# Development mode (with auto-restart)
npm run dev

# Production mode
npm start
```

Server will start on `http://localhost:5000`

## 📡 API Endpoints

### Public Endpoints

#### Health Check
```http
GET /api/health
```

#### Contact Form
```http
POST /api/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "I'd like to discuss a project..."
}
```

#### Projects
```http
GET /api/projects
GET /api/projects?category=frontend
GET /api/projects?featured=true
GET /api/projects/:id
```

#### Skills
```http
GET /api/skills
```

#### Analytics
```http
GET /api/analytics/visitors
POST /api/analytics/track
```

### Admin Endpoints

#### Contacts Management
```http
GET /api/admin/contacts
PUT /api/admin/contacts/:id/read
DELETE /api/admin/contacts/:id
```

#### Dashboard Stats
```http
GET /api/admin/dashboard
```

## 🗄️ Database Schema

### Tables

#### `contact_messages`
- Contact form submissions
- Fields: id, name, email, subject, message, is_read, timestamps

#### `projects`
- Portfolio projects
- Fields: id, title, description, image, tags, category, links, featured, active, timestamps

#### `skills`
- Technical skills
- Fields: id, name, category, proficiency, active, timestamps

#### `visitor_logs`
- Analytics data
- Fields: id, ip_address, page, referrer, user_agent, timestamp

## 🔧 Configuration

### Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `DB_HOST` | localhost | MySQL host |
| `DB_USER` | root | MySQL username |
| `DB_PASSWORD` | (empty) | MySQL password |
| `DB_NAME` | portfolio_db | Database name |
| `PORT` | 5000 | Server port |
| `NODE_ENV` | development | Environment mode |

### Database Setup

1. **Install MySQL**
   ```bash
   # Ubuntu/Debian
   sudo apt install mysql-server

   # macOS
   brew install mysql

   # Windows - Download from mysql.com
   ```

2. **Start MySQL Service**
   ```bash
   # Linux
   sudo systemctl start mysql

   # macOS
   brew services start mysql

   # Windows - MySQL Workbench or services.msc
   ```

3. **Create Database User** (Optional)
   ```sql
   CREATE USER 'portfolio_user'@'localhost' IDENTIFIED BY 'secure_password';
   GRANT ALL PRIVILEGES ON portfolio_db.* TO 'portfolio_user'@'localhost';
   FLUSH PRIVILEGES;
   ```

## 🧪 Testing the API

### Using cURL

```bash
# Health check
curl http://localhost:5000/api/health

# Get projects
curl http://localhost:5000/api/projects

# Submit contact form
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test Message",
    "message": "This is a test message"
  }'
```

### Using Postman/Insomnia

Import the following collection or manually test endpoints:

```
Portfolio API
├── GET /api/health
├── POST /api/contact
├── GET /api/projects
├── GET /api/skills
└── POST /api/analytics/track
```

## 🔒 Security Features

- **Rate Limiting**: 100 requests per 15 minutes per IP
- **Input Validation**: Comprehensive validation using express-validator
- **CORS**: Configured for frontend origin
- **Helmet**: Security headers
- **SQL Injection Protection**: Parameterized queries
- **XSS Protection**: Input sanitization

## 📊 Monitoring & Analytics

### Visitor Tracking
The API automatically tracks:
- Page views
- Referrer sources
- User agents
- IP addresses (anonymized)

### Admin Dashboard Data
- Daily visitor counts
- Contact message statistics
- Unread message counts
- Project view metrics

## 🚀 Deployment

### Production Checklist
- [ ] Set `NODE_ENV=production`
- [ ] Configure production database
- [ ] Set up SSL/TLS
- [ ] Configure reverse proxy (nginx)
- [ ] Set up monitoring
- [ ] Configure log rotation
- [ ] Set up backup strategy

### Docker Deployment (Optional)
```dockerfile
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 5000
CMD ["npm", "start"]
```

## 🐛 Troubleshooting

### Common Issues

**Database Connection Failed**
```bash
# Check MySQL is running
sudo systemctl status mysql

# Test connection
mysql -u root -p -e "SELECT 1"
```

**Port Already in Use**
```bash
# Find process using port 5000
lsof -i :5000

# Kill process
kill -9 <PID>
```

**CORS Errors**
- Check `FRONTEND_URL` in `.env`
- Ensure frontend is running on correct port

**Validation Errors**
- Check request body format
- Ensure all required fields are present
- Verify email format

## 📈 Performance Optimization

- **Connection Pooling**: 10 max connections
- **Query Optimization**: Indexed tables
- **Caching**: Consider Redis for session data
- **Compression**: Enable gzip compression
- **Rate Limiting**: Prevents abuse

## 🔄 API Versioning

Future API versions can be implemented as:
```
/api/v1/contacts
/api/v2/contacts
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Add tests for new features
4. Ensure all tests pass
5. Submit pull request

## 📄 License

MIT License - see LICENSE file for details.

## 📞 Support

For issues and questions:
- Check existing issues on GitHub
- Create new issue with detailed description
- Include error logs and environment details

---

**Built with ❤️ for the CS Portfolio project**