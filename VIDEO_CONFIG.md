# تنظیمات ویدیوی یوتیوب

## 🎥 وضعیت فعلی:
- **ویدیو 1**: دارای thumbnail واقعی از یوتیوب
- **ویدیو 2**: placeholder (Video ID معتبر نیست - باید تغییر کنه)

## چطور ویدیوهای یوتیوب رو تغییر بدیم؟

### مرحله 1: پیدا کردن Video ID
وقتی یک ویدیوی یوتیوب باز می‌کنید، در آدرس URL، Video ID رو می‌بینید:
```
https://www.youtube.com/watch?v=kH6homeWiXA
                                ^^^^^^^^^^^
                                این Video ID است
```

### مرحله 2: تغییر Video ID در کد
در فایل `index.html` خطوط 191 و 214:

**ویدیو اول:**
```html
<!-- خط 191 -->
<img src="https://img.youtube.com/vi/VIDEO_ID_AWAL/maxresdefault.jpg"
```

**ویدیو دوم:**
```html
<!-- خط 214 -->
<img src="https://img.youtube.com/vi/VIDEO_ID_DOVOM/maxresdefault.jpg"
```

### مرحله 3: تغییر لینک‌ها
لینک‌های "Watch on YouTube" رو هم باید آپدیت کنید (خطوط 189، 207، 212، 230):

```html
<a href="https://www.youtube.com/watch?v=VIDEO_ID_JADID" ...>
```

## مثال کامل:
اگر می‌خواید ویدیوی با ID `dQw4w9WgXcQ` رو نمایش بدید:

```html
<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" class="video-thumbnail-link">
    <div class="video-thumbnail">
        <img src="https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg" 
             alt="Tehran Comedy Performance"
             onerror="this.src='https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg'">
        <div class="video-play-overlay">
            <i class="fab fa-youtube"></i>
        </div>
    </div>
</a>
```

## نکات مهم:
- Video ID باید در هر دو جا (thumbnail و لینک) یکسان باشد
- اگر ویدیو خصوصی یا حذف شده باشد، thumbnail نمایش داده نمی‌شود
- `onerror` باعث می‌شود اگر تصویر با کیفیت بالا موجود نباشد، تصویر با کیفیت پایین‌تر بارگذاری شود

## 🔧 رفع مشکل ویدیوی دوم:

### راه حل 1: استفاده از ویدیوی واقعی
1. به کانال یوتیوب برید: https://www.youtube.com/@tehrandc
2. ویدیویی که می‌خواید رو انتخاب کنید
3. Video ID رو از URL کپی کنید
4. در `index.html` خط 212-223 رو با این کد جایگزین کنید:

```html
<div class="video-card">
    <a href="https://www.youtube.com/watch?v=VIDEO_ID_JADID" target="_blank" class="video-thumbnail-link">
        <div class="video-thumbnail">
            <img src="https://img.youtube.com/vi/VIDEO_ID_JADID/maxresdefault.jpg" 
                 alt="Tehran Cultural Commentary"
                 onerror="this.src='https://img.youtube.com/vi/VIDEO_ID_JADID/hqdefault.jpg'">
            <div class="video-play-overlay">
                <i class="fab fa-youtube"></i>
            </div>
        </div>
    </a>
    <div class="video-content">
        <h3>Cultural Commentary & Community Talk</h3>
        <p>Tehran discusses current events, cultural topics, and community issues with his unique perspective.</p>
        <div class="video-meta">
            <span class="views">Community Focus</span>
            <span class="date">Popular</span>
        </div>
        <div class="video-actions">
            <a href="https://www.youtube.com/watch?v=VIDEO_ID_JADID" class="btn btn-outline" target="_blank">Watch on YouTube</a>
        </div>
    </div>
</div>
```

### راه حل 2: نگه داشتن placeholder
- اگر ویدیوی خاصی ندارید، placeholder فعلی خوبه
- با کلیک روی اون، کاربر به کانال یوتیوب شما هدایت می‌شه

