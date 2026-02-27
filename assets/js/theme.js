  // Navbar Mobile Toggle
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  if ($navbarBurgers.length > 0) {
      $navbarBurgers.forEach( el => {
          el.addEventListener('click', () => {
              const target = el.dataset.target;
              const $target = document.getElementById(target);
              el.classList.toggle('is-active');
              $target.classList.toggle('is-active');
          });
      });
  }

  // Theme Toggle Logic (รองรับการมีปุ่มสลับ Theme หลายจุด)
  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  const htmlTag = document.documentElement;

  // ฟังก์ชันสำหรับอัปเดตไอคอนของปุ่มทั้งหมดให้ตรงกัน
  function updateThemeIcons(theme) {
      themeToggleBtns.forEach(btn => {
          const icon = btn.querySelector('i');
          if (theme === 'dark') {
              icon.classList.remove('fa-moon');
              icon.classList.add('fa-sun');
          } else {
              icon.classList.remove('fa-sun');
              icon.classList.add('fa-moon');
          }
      });
  }

  // 1. ตอนโหลดหน้าเว็บ ให้อ่านค่า Theme แล้วตั้งรูปไอคอนให้ถูกต้อง
  const currentTheme = htmlTag.getAttribute('data-theme') || 'light';
  updateThemeIcons(currentTheme);

  // 2. ผูก Event Listener ให้กับปุ่มทั้งหมด
  themeToggleBtns.forEach(btn => {
      btn.addEventListener('click', () => {
          const activeTheme = htmlTag.getAttribute('data-theme');
          const newTheme = activeTheme === 'light' ? 'dark' : 'light';
          
          // สลับ Theme
          htmlTag.setAttribute('data-theme', newTheme);
          // บันทึกลง Local Storage
          localStorage.setItem('theme', newTheme);
          // อัปเดตไอคอนทุกปุ่ม
          updateThemeIcons(newTheme);
      });
  });

  // SHARE BUTTON LOGIC
  // =========================================
  const shareBtns = document.querySelectorAll('.share-btn');
  const toast = document.getElementById('toast-notification');
  let toastTimeout;

  // ฟังก์ชันโชว์ Toast
  function showToast() {
      toast.classList.add('show');
      // เคลียร์ Timeout เก่าทิ้งก่อนเผื่อคนกดรัวๆ
      if(toastTimeout) clearTimeout(toastTimeout);
      // ตั้งเวลาให้ซ่อนหลังผ่านไป 3 วินาที
      toastTimeout = setTimeout(() => {
          toast.classList.remove('show');
      }, 3000);
  }

  // ผูก Event ให้ปุ่ม Share ทุกปุ่ม (บนมือถือและคอม)
  shareBtns.forEach(btn => {
      btn.addEventListener('click', async () => {
          const shareData = {
              title: document.title, // ดึง <title> ของหน้าเว็บมาใช้
              url: window.location.href // ดึง URL หน้าปัจจุบัน
          };

          // ตรวจสอบว่าเบราว์เซอร์รองรับ Web Share API ไหม (มือถือส่วนใหญ่รองรับ)
          if (navigator.share) {
              try {
                  await navigator.share(shareData);
                  // แชร์สำเร็จ ไม่ต้องทำอะไรเพิ่ม
              } catch (err) {
                  // กรณีผู้ใช้กดยกเลิกการแชร์ ไม่ต้องแสดง Error อะไร
                  console.log('Share canceled or failed:', err);
              }
          } else {
              // ถ้าไม่รองรับ (เช่นใน Chrome บนคอมพิวเตอร์) ให้ Copy ลง Clipboard แทน
              try {
                  // ใช้ Clipboard API ล่าสุด
                  await navigator.clipboard.writeText(shareData.url);
                  showToast(); // โชว์ข้อความ "คัดลอกลิงค์แล้ว"
              } catch (err) {
                  // กรณี Fallback ล้มเหลว (เผื่อเบราว์เซอร์บล็อกการเข้าถึง Clipboard)
                  console.error('Failed to copy text: ', err);
                  // อาจจะใช้วิธีเก่าอย่าง document.execCommand('copy') แต่เบราว์เซอร์รุ่นใหม่ๆ ไม่น่าพลาดแล้ว
              }
          }
      });
  });
