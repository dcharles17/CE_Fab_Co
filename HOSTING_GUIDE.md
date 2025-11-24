# Website Hosting Guide for CE Fab Co

This guide will walk you through getting your website online, including domain registration and hosting setup.

## Overview: What You Need

1. **Domain Name** - Your web address (e.g., cefabco.com)
2. **Web Hosting** - Server space to store your website files
3. **SSL Certificate** - Security certificate for HTTPS (usually included free)

**Total Cost:** $3-10/month for everything

---

## Step 1: Choose and Register a Domain Name

### Recommended Domain Names for CE Fab Co:
- cefabco.com (primary recommendation)
- cefabcompany.com
- cefabricationco.com
- cefabcoutah.com

### Best Domain Registrars (Cheapest & Most Reliable):

#### **Porkbun** ⭐ BEST VALUE
- **Cost:** $9-11/year (.com domain)
- **Why:** Cheapest prices, free WHOIS privacy, no upsells, clean interface
- **Website:** https://porkbun.com
- **What's included:** Free WHOIS privacy, free SSL certificate

#### **Namecheap** ⭐ POPULAR CHOICE
- **Cost:** $9-13/year first year, $13-15/year renewal (.com)
- **Why:** Reliable, good customer service, frequent promotions
- **Website:** https://www.namecheap.com
- **What's included:** Free WHOIS privacy first year, free SSL

#### **Cloudflare Registrar**
- **Cost:** At-cost pricing (~$9/year, no markup)
- **Why:** No markup pricing, excellent for SEO (built-in CDN)
- **Website:** https://www.cloudflare.com/products/registrar/
- **Note:** Requires existing Cloudflare account (free)

#### **Google Domains** (Now owned by Squarespace)
- **Cost:** $12/year
- **Why:** Simple, integrates with Google Workspace
- **Website:** https://domains.google
- **What's included:** Free WHOIS privacy, email forwarding

### How to Register a Domain:

1. Go to Porkbun.com (or your chosen registrar)
2. Search for your desired domain (e.g., "cefabco")
3. Check if .com is available
   - If taken, try variations or .co, .net
4. Add domain to cart
5. Create account and complete purchase
6. **Important:** Enable WHOIS privacy protection (keeps your personal info private)

**Pro Tip:** Register for at least 2-3 years to save money and improve SEO slightly.

---

## Step 2: Choose a Web Hosting Service

Since your website is a simple static HTML site (no database, no backend), you can use **very cheap hosting**.

### Best Static Website Hosting Options:

---

### **Option 1: Netlify** ⭐ RECOMMENDED FOR BEGINNERS (FREE!)

**Cost:** FREE forever (for static sites)

**Why Choose Netlify:**
- Completely free for static sites
- Automatic SSL certificate
- Fast global CDN (content delivery network)
- Continuous deployment from Git (optional)
- Custom domain support (free)
- No server management needed
- 100GB bandwidth/month (more than enough)

**Perfect for:** CE Fab Co website (simple, static HTML)

**How to Deploy:**
1. Sign up at https://www.netlify.com
2. Drag and drop your website folder (or connect Git)
3. Site goes live instantly at yoursite.netlify.app
4. Connect your custom domain (instructions provided)

**Limitations:**
- Static sites only (but that's all you need!)
- No email hosting (see email section below)

---

### **Option 2: Cloudflare Pages** (FREE)

**Cost:** FREE forever

**Why Choose Cloudflare:**
- Free unlimited bandwidth
- Fastest CDN in the world
- Free SSL certificate
- Automatic HTTPS rewrites
- Great for SEO

**How to Deploy:**
1. Sign up at https://pages.cloudflare.com
2. Upload your files via Git or direct upload
3. Connect your domain
4. Done!

**Perfect for:** Tech-savvy users who want maximum speed

---

### **Option 3: GitHub Pages** (FREE)

**Cost:** FREE

**Why Choose GitHub:**
- Free hosting for static sites
- Good for developers
- Integrates with version control

**How to Deploy:**
1. Create GitHub account at https://github.com
2. Create repository named `username.github.io`
3. Upload your website files
4. Enable GitHub Pages in settings
5. Connect custom domain

**Limitations:**
- Public repository (anyone can see your code)
- Requires basic Git knowledge

---

### **Option 4: Traditional Shared Hosting** (PAID - Best for Email)

If you want email hosting (like info@cefabco.com), you'll need traditional hosting.

#### **Hostinger** ⭐ BEST VALUE WITH EMAIL
- **Cost:** $1.99-2.99/month (first term), ~$4-6/month renewal
- **Storage:** 50-100GB SSD
- **Bandwidth:** Unlimited
- **Email accounts:** 1-100 (depending on plan)
- **Free SSL:** Yes
- **Website:** https://www.hostinger.com
- **Best Plan:** "Premium Web Hosting" ($2.99/month)

#### **Namecheap Shared Hosting**
- **Cost:** $1.58-2.98/month (first year), ~$4-6/month renewal
- **Storage:** 20-50GB SSD
- **Email accounts:** 30-unlimited
- **Free SSL:** Yes
- **Website:** https://www.namecheap.com/hosting/

#### **DreamHost**
- **Cost:** $2.59-4.95/month
- **Storage:** 50GB SSD
- **Email:** Unlimited accounts
- **Free SSL:** Yes
- **Why:** Good performance, solid support
- **Website:** https://www.dreamhost.com

---

### **Option 5: Vercel** (FREE)

**Cost:** FREE for personal use

**Why Choose Vercel:**
- Lightning fast
- Free SSL
- Great performance
- Simple deployment

**Website:** https://vercel.com

---

## Recommended Setup by Budget

### **FREE Option (Best for Starting Out):**
- **Domain:** Porkbun ($9/year)
- **Hosting:** Netlify (FREE)
- **Email:** Gmail with custom domain via Google Workspace ($6/month)
- **Total:** $9/year + $72/year email = **$81/year ($6.75/month)**

### **Budget Option (Everything Included):**
- **Domain:** Porkbun ($9/year)
- **Hosting + Email:** Hostinger Premium ($2.99/month first term)
- **Total First Year:** $9 + ($2.99 × 12) = **$45/year (~$3.75/month)**
- **Renewal:** $9 + ($5 × 12) = **$69/year (~$5.75/month)**

### **Best Value Long-Term:**
- **Domain:** Porkbun ($9/year)
- **Hosting:** Netlify (FREE)
- **Email:** Zoho Mail ($1/user/month)
- **Total:** **$21/year (~$1.75/month)**

---

## Step 3: Upload Your Website

### For Netlify (Easiest):

1. **Sign up** at https://netlify.com
2. Click **"Add new site"** → **"Deploy manually"**
3. **Drag and drop** your entire website folder
4. Wait 30 seconds - your site is live!
5. You'll get a URL like: `happy-example-123456.netlify.app`

### For Traditional Hosting (cPanel):

1. **Log in** to your hosting control panel (cPanel)
2. Open **"File Manager"**
3. Navigate to `public_html` folder
4. Click **"Upload"**
5. Upload these files:
   - index.html
   - styles.css
   - script.js
   - images/ folder (with all contents)
6. Your site is now live at your domain!

### Via FTP (Alternative):

1. Download **FileZilla** (free FTP client): https://filezilla-project.org
2. Get FTP credentials from your hosting provider
3. Connect to your server
4. Upload all files to `public_html` or `www` directory
5. Done!

---

## Step 4: Connect Your Domain to Hosting

### For Netlify:

1. Go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Enter your domain: `cefabco.com`
4. Netlify will provide DNS records to add
5. Go to your domain registrar (Porkbun)
6. Add the DNS records Netlify provides:
   - **A Record:** Points to Netlify's IP
   - **CNAME Record:** Points www to main domain
7. Wait 24-48 hours for DNS propagation
8. SSL certificate is automatically generated

### For Traditional Hosting:

#### **Option A: Point Nameservers (Easiest)**
1. Your hosting provider will give you nameservers like:
   - ns1.hostinger.com
   - ns2.hostinger.com
2. Log in to Porkbun (your domain registrar)
3. Find **"Nameservers"** section
4. Change from Porkbun's nameservers to your host's nameservers
5. Save changes
6. Wait 4-24 hours for propagation

#### **Option B: Update DNS Records**
1. Log in to Porkbun
2. Go to **DNS settings** for your domain
3. Add **A Record:**
   - Host: `@`
   - Points to: Your hosting IP address (provided by host)
4. Add **CNAME Record:**
   - Host: `www`
   - Points to: `@` or your domain
5. Save changes
6. Wait 1-24 hours

---

## Step 5: Set Up Professional Email

You'll want email addresses like:
- info@cefabco.com
- contact@cefabco.com
- quotes@cefabco.com

### Email Hosting Options:

#### **Option 1: Included with Traditional Hosting** (Easiest)
If you chose Hostinger, Namecheap, or DreamHost:
- Email is included!
- Log in to cPanel
- Go to **"Email Accounts"**
- Create email addresses
- Access via webmail or phone/computer email app

#### **Option 2: Google Workspace** (Most Professional)
- **Cost:** $6/user/month
- **Includes:** Gmail interface, 30GB storage, Google Calendar, Drive
- **Website:** https://workspace.google.com
- **Best for:** Professional appearance, familiar Gmail interface

#### **Option 3: Zoho Mail** ⭐ BEST VALUE
- **Cost:** $1/user/month (Lite plan)
- **Storage:** 10GB per user
- **Why:** Cheapest professional email, works great
- **Website:** https://www.zoho.com/mail/
- **Free tier:** 5GB, 1 user (good for starting)

#### **Option 4: Microsoft 365**
- **Cost:** $6/user/month
- **Includes:** Outlook, OneDrive, Office apps
- **Website:** https://www.microsoft.com/microsoft-365/business

---

## Step 6: Enable SSL Certificate (HTTPS)

**For Netlify/Cloudflare/Vercel:**
- SSL is automatic and FREE! Nothing to do.

**For Traditional Hosting:**
1. Log in to cPanel
2. Find **"SSL/TLS Status"** or **"Let's Encrypt SSL"**
3. Click **"Install"** or **"Enable"** for your domain
4. Wait 5-10 minutes
5. Your site now has HTTPS! 🔒

**Free SSL Providers:**
- Let's Encrypt (built into most hosts)
- Cloudflare (if using their DNS/CDN)

---

## Step 7: Update Your Website Contact Info

After getting your domain and email set up, update these files:

### Update index.html:
- Line 38: Replace `+15555551234` with real phone number
- Line 142: Replace phone number
- Lines 42-46: Add real street address, city, zip code
- Line 150: Replace `info@cefabco.com` with your real email
- Lines 194-195: Update footer contact info

### Update script.js:
- Line 103: Replace `info@cefabco.com` with your real email

---

## Complete Step-by-Step Setup (Recommended Path)

### Week 1: Get Online (FREE Option)

**Day 1:**
1. ✅ Register domain at Porkbun ($9/year)
   - Search for cefabco.com
   - Purchase for 2-3 years
   - Enable WHOIS privacy

**Day 2:**
2. ✅ Sign up for Netlify (FREE)
   - Create account at netlify.com
   - Drag/drop your website folder
   - Get temporary URL

**Day 3:**
3. ✅ Connect domain to Netlify
   - Add custom domain in Netlify
   - Update DNS records at Porkbun
   - Wait for DNS propagation (4-48 hours)

**Day 4:**
4. ✅ Set up email
   - Sign up for Zoho Mail free tier
   - Create info@cefabco.com
   - Add MX records to Porkbun DNS

**Day 5:**
5. ✅ Update website with real info
   - Add real phone number
   - Add real email address
   - Add business address
   - Upload changes to Netlify

**Day 6-7:**
6. ✅ Test everything
   - Visit cefabco.com (should work!)
   - Send test email to info@cefabco.com
   - Test contact form
   - Check mobile responsiveness

---

## Ongoing Costs Comparison

### FREE Option (Netlify):
- Domain: $9/year
- Hosting: FREE
- Email (Zoho free): FREE
- **Total: $9/year**

### Budget Option (Hostinger):
- Domain: $9/year
- Hosting + Email: $60/year (renewal rate)
- **Total: $69/year (~$5.75/month)**

### Premium Option (Netlify + Google):
- Domain: $9/year
- Hosting: FREE
- Email (Google Workspace): $72/year
- **Total: $81/year (~$6.75/month)**

---

## Technical Requirements Checklist

Your website is already ready to deploy! Here's what you have:

✅ Static HTML website (no server requirements)
✅ No database needed
✅ No PHP/backend code
✅ Responsive design (mobile-friendly)
✅ Fast loading
✅ SEO optimized
✅ All files ready to upload

**You can deploy to ANY hosting service immediately!**

---

## Troubleshooting Common Issues

### "My domain isn't working yet"
- **Solution:** DNS changes take 4-48 hours. Be patient.
- **Check:** Use https://dnschecker.org to see propagation status

### "I see a security warning"
- **Solution:** SSL certificate is still generating (takes 10-60 minutes)
- **Wait:** Check back in an hour

### "Images aren't loading"
- **Solution:** Make sure you uploaded the entire `images/` folder
- **Check:** File paths are case-sensitive on servers (CE_Logo.jpeg not ce_logo.jpeg)

### "Contact form isn't working"
- **Note:** The form currently opens email client (mailto)
- **Solution:** This is normal behavior for your current setup
- **Future:** Add backend form service like Formspree or EmailJS

---

## Next Steps After Launch

1. **Submit to Google Search Console**
   - https://search.google.com/search-console
   - Verify ownership
   - Submit sitemap

2. **Set up Google Analytics**
   - https://analytics.google.com
   - Add tracking code to website
   - Monitor traffic

3. **Set up Google Business Profile**
   - https://business.google.com
   - Critical for local SEO!
   - Add photos, hours, location

4. **Start getting reviews**
   - Ask customers to leave Google reviews
   - Respond to all reviews

5. **Monitor website performance**
   - Check weekly for issues
   - Update contact info as needed
   - Add new portfolio photos

---

## Support Resources

### Domain Help:
- Porkbun Support: https://kb.porkbun.com
- Namecheap Support: https://www.namecheap.com/support/

### Hosting Help:
- Netlify Docs: https://docs.netlify.com
- Hostinger Support: https://www.hostinger.com/tutorials

### Email Help:
- Zoho Mail Support: https://help.zoho.com/portal/en/home
- Google Workspace Support: https://support.google.com/a

### DNS Help:
- What is DNS? https://www.cloudflare.com/learning/dns/what-is-dns/
- DNS Propagation Checker: https://dnschecker.org

---

## Summary: My Recommendation

**Best Overall Setup for CE Fab Co:**

1. **Domain:** Porkbun ($9/year)
2. **Hosting:** Netlify (FREE)
3. **Email:** Zoho Mail free tier or $1/month
4. **Total Cost:** $9-21/year

**Why this setup:**
- ✅ Extremely cheap
- ✅ Fast and reliable
- ✅ Easy to manage
- ✅ Professional appearance
- ✅ Free SSL certificate
- ✅ Global CDN (fast worldwide)
- ✅ No server management
- ✅ Automatic backups
- ✅ Easy to update

**When to upgrade:**
- If you need more than 5 email addresses → Upgrade to Zoho paid ($1/user/month)
- If you want phone support → Switch to Hostinger (~$5/month)
- If you need a blog → Add WordPress on subdomain or use Netlify CMS

---

## Questions?

If you get stuck:
1. Check your hosting provider's knowledge base
2. Search YouTube for "[hosting provider] setup tutorial"
3. Contact support (most have live chat)
4. Post in r/webhosting on Reddit

**Good luck launching CE Fab Co online! 🚀**
