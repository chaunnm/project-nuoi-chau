# 🎄 Nuôi Châu Project – A Christmas Jekyll Website

Welcome to **Nuôi Châu**, a fun, festive, and lightweight Christmas-themed website built with **Jekyll**. This project is designed for personal use, filled with humor, animated decorations, interactive modals, and static content perfect for the holiday season.

---

## 📦 Technologies Used

- **Jekyll** – Static site generator.
- **Liquid** – Templating engine for Jekyll.
- **YAML** – Global data storage via `_data/`.
- **Tailwind CSS** – Utility-first CSS framework.
- **FontAwesome** – For holiday-themed icons.
- **Custom JavaScript** – Modals, animations, and interactivity.

---

## ⚙️ Getting Started

### ✅ Prerequisites

- Ruby >= 2.7
- Bundler
- Jekyll

> _On macOS, you can install with Homebrew: `brew install ruby` and then `gem install bundler jekyll`_

### 🧰 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/yourusername/nuoi-chau.git
cd nuoi-chau
bundle install
```

### 🔃 Run Locally

```bash
bundle exec jekyll serve
```

Then visit:

```bash
http://localhost:4000

```

You should see your festive "Nuôi Châu" website running locally.

---

## ✍️ How to Customize

### 🔸 Change Author Name

Edit file: `_config.yml`

```bash
author: Chau
```

Use anywhere in HTML:

```bash
{{ site.author }}
```

### 🔸 Update Quotes for Donation Modal

Edit xmasQuotes are used in `assets/scripts/donate.js`

```bash
const xmasQuotes = [
    "Ho Ho Ho! Cảm ơn Santa Claus! 🎅",
    "Món quà này ấm hơn cả lò sưởi! 🔥",
    "Chúc bạn Giáng Sinh an lành 🎄",
    "Châu đã nhận được tín hiệu từ Bắc Cực ❄️",
];
```

### 🔸 (Recommended) Customize Content via `_data/*.yml`

Instead of hardcoding text in HTML or JavaScript, Jekyll allows you to store global data inside the `_data/` folder.

```bash
_data/
├── finance.yml
├── hall-of-fame.yml
├── pricing.yml
└── reviews.yml
```

---

## 📄 License

MIT License – feel free to fork and decorate your own version!

> This is a personal project intended for educational or entertainment purposes.

---

## 🙋 Contact

Created with ❤️ by Châu.

Merry Christmas and Happy Holidays! 🎄🎁
