// ===================== DU LIEU DE CHINH SUA =====================
// Thay link bao tang 3D chinh thuc tai dong ben duoi.
const museum3DLink = "https://example.com/bao-tang-3d";

// Cac moc lich su duoc tom tat tu tai lieu "Tom tat lich su truong Cao dang Hau can 2".
const historyTimeline = [
  {
    time: "30/8/1977 - 01/1978",
    title: "Thành lập Trường Trung học Quân y 2",
    description: "Trước yêu cầu bảo đảm nguồn nhân lực quân y cho các đơn vị phía Nam, Tổng cục Hậu cần ban hành quyết định thành lập Trường Trung học Quân y 2 trực thuộc Cục Quân y, tiếp nối truyền thống của các đơn vị K52 và ĐT25. Tháng 01/1978, Bệnh viện Quân y 115 hợp nhất vào Nhà trường theo mô hình Trường - Viện."
  },
  {
    time: "1977 - 1988",
    title: "Nhà trường gắn liền với chiến trường",
    description: "Trong điều kiện đất nước còn nhiều khó khăn, Nhà trường vừa xây dựng đơn vị, vừa đẩy mạnh đào tạo y, dược sĩ phục vụ chiến trường. Cán bộ, học viên trực tiếp bám sát thực tế chiến đấu, phục vụ nhiệm vụ quốc tế tại Campuchia và góp phần đào tạo lực lượng quân y cho bạn."
  },
  {
    time: "11/1982 - 12/1984",
    title: "Điều chỉnh tổ chức, sáp nhập và trực thuộc Quân khu 7",
    description: "Trước yêu cầu nhiệm vụ mới, Trường Trung học Quân y 2 và Bệnh viện Quân y 115 được tách thành hai đơn vị độc lập. Sau đó Nhà trường được bàn giao về Quân khu 7 và sáp nhập với Trường Quân y Quân khu 7, mang phiên hiệu Trường Trung học Quân y 2 - Quân khu 7."
  },
  {
    time: "1988 - 2018",
    title: "Đổi mới, mở rộng đào tạo và khẳng định uy tín",
    description: "Nhà trường mở các lớp đào tạo y sĩ hệ dân sự đầu tiên trong toàn quân, đổi tên thành Trường Trung cấp Quân y 2 vào tháng 7/2008, liên kết đào tạo nguồn nhân lực y tế cơ sở cho các địa phương phía Nam, vùng sâu, vùng xa, biên giới, hải đảo và tiếp tục giúp bạn Campuchia."
  },
  {
    time: "2018 - 2020",
    title: "Nâng cấp và phát triển thành Trường Cao đẳng Hậu cần 2",
    description: "Tháng 4/2018, Nhà trường được nâng cấp thành Trường Cao đẳng Quân y 2. Tháng 12/2020, Nhà trường chuyển giao về Tổng cục Hậu cần và đổi tên thành Trường Cao đẳng Hậu cần 2, mở ra giai đoạn phát triển mới từ đào tạo đơn ngành quân y sang đào tạo đa ngành về hậu cần."
  },
  {
    time: "2021 đến nay",
    title: "Phát huy truyền thống trong tình hình mới",
    description: "Trong đại dịch COVID-19, cán bộ, học viên Nhà trường xung phong tham gia phòng, chống dịch tại Thành phố Hồ Chí Minh và các tỉnh phía Nam, góp phần chăm sóc, bảo vệ Nhân dân, tô thắm hình ảnh Bộ đội Cụ Hồ và tiếp tục phát huy truyền thống đoàn kết, sáng tạo, dạy tốt, học tốt, kỷ luật nghiêm, phục vụ tốt."
  }
];

// Thay mo ta thanh tich bang noi dung chinh thuc, khong tu them so lieu neu chua co nguon.
const achievements = [
  {
    title: "Thành tích trong giáo dục, đào tạo",
    description: "Duy trì hoạt động đào tạo quân sự và dân sự, tổ chức các lớp nhân viên quân y, y sĩ, điều dưỡng, dược và các ngành hậu cần theo nhiệm vụ được giao."
  },
  {
    title: "Đổi mới phương pháp giảng dạy",
    description: "Tổ chức hội thi giảng viên, giáo viên và các hoạt động bồi dưỡng chuyên môn, góp phần nâng cao chất lượng dạy học."
  },
  {
    title: "Thành tích trong xây dựng chính quy",
    description: "Tăng cường rèn luyện nền nếp, kỷ luật, kiểm tra nội vụ, xây dựng tác phong chính quy trong cán bộ, học viên, sinh viên."
  },
  {
    title: "Hoạt động thi đua, tuyên truyền",
    description: "Triển khai hội thi báo cáo viên, các hoạt động chính trị, giáo dục truyền thống và phong trào thi đua trong Nhà trường."
  },
  {
    title: "Hoạt động cộng đồng và tuyển sinh",
    description: "Tổ chức các hoạt động vì cộng đồng, truyền thông tuyển sinh và giới thiệu các ngành đào tạo phục vụ xã hội, quốc phòng."
  }
];

// Cac hoat dong qua hinh anh. Chi gan anh voi noi dung khop truc tiep de tranh sai ngu canh.
const recentActivities = [
  {
    date: "Tháng 6/2025",
    title: "Lễ khai giảng lớp nhân viên quân y đại đội khóa 42",
    description: "Đồng chí Hiệu trưởng Nhà trường đọc diễn văn tại Lễ khai giảng lớp nhân viên quân y đại đội khóa 42.",
    image: "assets/images/gallery-qy2-02.jpg",
    imageNote: "Đồng chí Hiệu trưởng đọc diễn văn tại lễ khai giảng",
    sourceLabel: "Ảnh người dùng cung cấp"
  },
  {
    date: "Tư liệu đào tạo",
    title: "Tập huấn, bồi dưỡng chuyên môn giảng dạy",
    description: "Giáo viên Nhà trường tham dự tập huấn biên soạn câu hỏi trắc nghiệm khách quan, phục vụ đổi mới phương pháp dạy học.",
    image: "assets/images/gallery-qy2-03.jpg",
    imageNote: "Lớp tập huấn chuyên môn cho giáo viên",
    sourceLabel: "Sách ảnh 1977 - 2017"
  },
  {
    date: "Tư liệu đào tạo",
    title: "Giờ học môn thực vật tại vườn thuốc nam",
    description: "Học viên học tập, quan sát thực tế tại vườn thuốc nam của Nhà trường, gắn lý thuyết với thực hành chuyên môn.",
    image: "assets/images/gallery-qy2-04.jpg",
    imageNote: "Giờ học môn thực vật tại vườn thuốc nam",
    sourceLabel: "Sách ảnh 1977 - 2017"
  },
  {
    date: "Tư liệu thực hành",
    title: "Hướng dẫn thực hành môn châm cứu",
    description: "Giảng viên hướng dẫn học viên thao tác thực hành môn châm cứu tại Khoa Y học cổ truyền.",
    image: "assets/images/gallery-qy2-05.jpg",
    imageNote: "Hướng dẫn thực hành môn châm cứu",
    sourceLabel: "Sách ảnh 1977 - 2017"
  },
  {
    date: "Tư liệu thực hành",
    title: "Thi thực hành “5 Kỹ thuật cấp cứu”",
    description: "Học viên thực hiện phần thi “5 Kỹ thuật cấp cứu” trong kỳ thi tốt nghiệp, rèn luyện năng lực xử trí tình huống chuyên môn.",
    image: "assets/images/gallery-qy2-06.jpg",
    imageNote: "Học viên thực hành kỹ thuật cấp cứu",
    sourceLabel: "Sách ảnh 1977 - 2017"
  },
  {
    date: "Tư liệu rèn luyện",
    title: "Kiểm tra nội vụ vệ sinh",
    description: "Học viên Nhà trường thực hiện chế độ kiểm tra nội vụ vệ sinh, góp phần xây dựng nền nếp chính quy, kỷ luật.",
    image: "assets/images/gallery-qy2-08.jpg",
    imageNote: "Học viên kiểm tra nội vụ vệ sinh",
    sourceLabel: "Sách ảnh 1977 - 2017"
  },
  {
    date: "Tư liệu hậu cần",
    title: "Tham quan nhà ăn mới được xây dựng",
    description: "Cán bộ Nhà trường tham quan nhà ăn mới, thể hiện sự quan tâm xây dựng cơ sở vật chất, bảo đảm đời sống và nhiệm vụ hậu cần.",
    image: "assets/images/gallery-qy2-09.jpg",
    imageNote: "Cán bộ tham quan nhà ăn mới",
    sourceLabel: "Sách ảnh 1977 - 2017"
  }
];

// Anh tu lieu trich tu sach anh "Truong Trung cap Quan y 2 - 40 nam xay dung va truong thanh (1977 - 2017)".
const galleryImages = [
  {
    src: "assets/images/gallery-qy2-01.jpg",
    caption: "Toàn cảnh khu nhà chỉ huy và các phòng chức năng được khánh thành, đưa vào sử dụng năm 2010."
  },
  {
    src: "assets/images/gallery-qy2-02.jpg",
    caption: "Đồng chí Hiệu trưởng Nhà trường đọc diễn văn tại Lễ khai giảng lớp nhân viên quân y đại đội khóa 42."
  },
  {
    src: "assets/images/gallery-qy2-03.jpg",
    caption: "Giáo viên Nhà trường tham dự tập huấn biên soạn câu hỏi trắc nghiệm khách quan năm 2014."
  },
  {
    src: "assets/images/gallery-qy2-04.jpg",
    caption: "Giờ học môn thực vật tại vườn thuốc nam Nhà trường."
  },
  {
    src: "assets/images/gallery-qy2-05.jpg",
    caption: "Hướng dẫn thực hành môn châm cứu tại Khoa Y học cổ truyền."
  },
  {
    src: "assets/images/gallery-qy2-06.jpg",
    caption: "Học viên thực hiện phần thi “5 Kỹ thuật cấp cứu” trong kỳ thi tốt nghiệp."
  },
  {
    src: "assets/images/gallery-qy2-07.jpg",
    caption: "Nhà trường nhận bằng khen của Thủ tướng Chính phủ năm 2007."
  },
  {
    src: "assets/images/gallery-qy2-08.jpg",
    caption: "Học viên Nhà trường thực hiện chế độ kiểm tra nội vụ vệ sinh."
  },
  {
    src: "assets/images/gallery-qy2-09.jpg",
    caption: "Cán bộ Nhà trường tham quan nhà ăn mới được xây dựng."
  }
];
// ================================================================

const nav = document.querySelector(".main-nav");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelectorAll(".main-nav a");
const museumLinks = document.querySelectorAll(".museum-link");
const timelineRoot = document.querySelector("#timeline");
const achievementGrid = document.querySelector("#achievementGrid");
const activityGrid = document.querySelector("#activityGrid");
const galleryGrid = document.querySelector("#galleryGrid");
const imageModal = document.querySelector("#imageModal");
const modalImage = document.querySelector("#modalImage");
const modalCaption = document.querySelector("#modalCaption");
const modalClose = document.querySelector(".modal-close");
const backToTop = document.querySelector(".back-to-top");

museumLinks.forEach((link) => {
  link.href = museum3DLink;
});

document.querySelector("#currentYear").textContent = new Date().getFullYear();

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

function renderTimeline() {
  timelineRoot.innerHTML = historyTimeline
    .map((item) => `
      <article class="timeline-item">
        <span class="timeline-dot" aria-hidden="true"></span>
        <div class="timeline-card">
          <span class="timeline-time">${item.time}</span>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </div>
      </article>
    `)
    .join("");
}

function renderAchievements() {
  achievementGrid.innerHTML = achievements
    .map((item) => `
      <article class="achievement-card">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </article>
    `)
    .join("");
}

function renderActivities() {
  activityGrid.innerHTML = recentActivities
    .map((item) => `
      <article class="activity-card">
        <img src="${item.image}" alt="${item.imageNote}">
        <div class="activity-content">
          <span class="activity-date">${item.date}</span>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          ${item.source ? `<a href="${item.source}" target="_blank" rel="noopener">Xem nguồn</a>` : `<span class="activity-source">${item.sourceLabel}</span>`}
        </div>
      </article>
    `)
    .join("");
}

function renderGallery() {
  galleryGrid.innerHTML = galleryImages
    .map((image, index) => `
      <figure class="gallery-item" tabindex="0" role="button" data-index="${index}" aria-label="Xem ảnh ${image.caption}">
        <img src="${image.src}" alt="${image.caption}">
        <figcaption>${image.caption}</figcaption>
      </figure>
    `)
    .join("");

  document.querySelectorAll(".gallery-item").forEach((item) => {
    item.addEventListener("click", () => openModal(Number(item.dataset.index)));
    item.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openModal(Number(item.dataset.index));
      }
    });
  });
}

function openModal(index) {
  const image = galleryImages[index];
  modalImage.src = image.src;
  modalImage.alt = image.caption;
  modalCaption.textContent = image.caption;
  imageModal.classList.add("open");
  imageModal.setAttribute("aria-hidden", "false");
  modalClose.focus();
}

function closeModal() {
  imageModal.classList.remove("open");
  imageModal.setAttribute("aria-hidden", "true");
  modalImage.removeAttribute("src");
}

modalClose.addEventListener("click", closeModal);

imageModal.addEventListener("click", (event) => {
  if (event.target === imageModal) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && imageModal.classList.contains("open")) {
    closeModal();
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".section-observe").forEach((section) => observer.observe(section));

const sectionIds = Array.from(navLinks)
  .map((link) => link.getAttribute("href"))
  .filter((href) => href && href.startsWith("#"));

const activeNavObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }

    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
    });
  });
}, {
  rootMargin: "-35% 0px -55% 0px",
  threshold: 0
});

sectionIds.forEach((id) => {
  const section = document.querySelector(id);
  if (section) {
    activeNavObserver.observe(section);
  }
});

renderTimeline();
renderAchievements();
renderActivities();
renderGallery();
