# 🎥 راهنمای تنظیم ویدیوهای یوتیوب

## ⚠️ مشکل فعلی:
Video ID های فعلی (`kH6homeWiXA` و `cHLypPOLyUQ`) **اجازه embedding ندارند**.

خطای 153 یعنی:
- صاحب ویدیو embedding را غیرفعال کرده
- ویدیو محدودیت دارد (سنی، جغرافیایی و...)
- باید Video ID های دیگری استفاده شوند

---

## ✅ راه حل:

### گام 1: پیدا کردن ویدیوهایی که Embedding دارند

1. به کانال یوتیوب برید: https://www.youtube.com/@tehrandc
2. روی یک ویدیو راست کلیک کنید
3. "Copy embed code" را انتخاب کنید
4. اگر این گزینه موجود بود، ویدیو قابل embed است ✅
5. اگر نبود، ویدیوی دیگری انتخاب کنید ❌

### گام 2: استخراج Video ID

از URL ویدیو:
```
https://www.youtube.com/watch?v=ABC123XYZ
                                ^^^^^^^^^ 
                                این Video ID است
```

### گام 3: تست کردن Embedding

قبل از تغییر در سایت، ویدیو را تست کنید:
```
https://www.youtube.com/embed/VIDEO_ID_SHOMA
```

اگر ویدیو لود شد → قابل استفاده است ✅
اگر خطا داد → ویدیوی دیگری انتخاب کنید ❌

---

## 🔧 تغییر Video ID در سایت:

در فایل `index.html`:

### ویدیوی اول (خط 189):
```html
<div class="video-thumbnail-link" onclick="openVideoModal('VIDEO_ID_JADID_1')">
```

و خط 191:
```html
<img src="https://img.youtube.com/vi/VIDEO_ID_JADID_1/maxresdefault.jpg"
```

و خط 207:
```html
<button onclick="openVideoModal('VIDEO_ID_JADID_1')" class="btn btn-primary">
```

و خط 210:
```html
<a href="https://www.youtube.com/watch?v=VIDEO_ID_JADID_1"
```

### ویدیوی دوم (خط 217، 237، 240):
همین کارها را برای ویدیوی دوم تکرار کنید.

---

## 🎯 مثال با Video ID واقعی:

اگر Video ID شما `dQw4w9WgXcQ` است:

```html
<div class="video-thumbnail-link" onclick="openVideoModal('dQw4w9WgXcQ')">
    <div class="video-thumbnail">
        <img src="https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg" 
             alt="Tehran Comedy Performance"
             onerror="this.src='https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg'">
        <div class="video-play-overlay">
            <i class="fab fa-youtube"></i>
        </div>
    </div>
</div>
```

---

## 💡 نکات مهم:

1. **همه جاها باید یکسان باشد**: Video ID در تمام 4 جا (thumbnail img, onclick, button, link) باید یکسان باشد
2. **تست قبل از استفاده**: حتماً در embed URL تست کنید
3. **ویدیوهای عمومی**: فقط ویدیوهای عمومی (Public) قابل embed هستند
4. **تنظیمات یوتیوب**: صاحب ویدیو باید در تنظیمات یوتیوب، "Allow embedding" را فعال کرده باشد

---

## 🔍 چک کردن تنظیمات Embedding در یوتیوب:

اگر خودتان صاحب کانال هستید:
1. YouTube Studio → Content
2. روی ویدیو کلیک کنید
3. Details → Show More
4. "Allow embedding" را تیک بزنید ✅
5. Save کنید

---

## ⚡ راه حل موقت:

تا زمانی که Video ID های صحیح پیدا نکردید، سایت فعلاً ویدیوها را با دکمه "YouTube" به یوتیوب هدایت می‌کند که 100% کار می‌کند.

