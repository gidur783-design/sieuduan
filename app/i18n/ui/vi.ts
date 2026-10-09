import type { UiDictionary } from "../types";

export const ui: UiDictionary = {
  meta: {
    title: "EDU AI — Học giải phẫu như một nghệ sĩ",
    description:
      "Khám phá các cơ quan 3D chi tiết về mặt y khoa — tim, não, phổi, gan, thận, mắt, ruột, tuỵ và da — trong một xưởng giải phẫu tương tác, tinh tế.",
    ogTitle: "EDU AI — Học giải phẫu như một nghệ sĩ",
    ogDescription: "Học giải phẫu như một nghệ sĩ qua những mẫu vật 3D sống động, chi tiết về mặt y khoa.",
    imageAlt: "Một mẫu vật trái tim giải phẫu lơ lửng phía trên bệ đỡ, bên cạnh logo EDU AI",
  },
  brand: { tagline: "Học giải phẫu như một nghệ sĩ", home: "Trang chủ EDU AI" },
  nav: { explore: "Khám phá", systems: "Hệ cơ quan", lessons: "Bài học", library: "Thư viện", notes: "Ghi chú" },
  search: { placeholder: "Tìm cơ quan, chủ đề…" },
  profile: { open: "Mở hồ sơ người học" },
  language: { label: "Ngôn ngữ", choose: "Chọn ngôn ngữ" },
  library: {
    title: "Thư viện cơ quan", open: "Mở thư viện cơ quan", close: "Đóng thư viện", saved: "Cơ quan đã lưu",
    viewAll: "Xem tất cả cơ quan",
    quoteLine1: "Học tập là", quoteLine2: "một hành động của sự tò mò.", quoteSign: "Hãy tiếp tục khám phá!",
  },
  tools: {
    label: "Công cụ xem 3D", rotate: "Xoay", zoom: "Thu phóng", isolate: "Tách riêng",
    section: "Mặt cắt", layers: "Các lớp", compare: "So sánh", reset: "Đặt lại",
  },
  viewer: {
    title: "Trình xem tương tác: {organ}",
    canvas: "Mô hình giải phẫu 3D tương tác. Kéo để xoay, cuộn để thu phóng và nhấp vào một chấm để đọc về cấu trúc đó.",
    tip: "Mẹo", tipDrag: "Kéo để xoay", tipScroll: "Cuộn để thu phóng", tipClick: "Nhấp vào chấm để tìm hiểu thêm",
    loading: "Đang chuẩn bị: {organ}", autoRotate: "Tự động xoay",
    caption: "Mẫu vật 3D · nhấp vào chấm để khám phá", structures: "Các cấu trúc trong mẫu vật này",
  },
  info: {
    kicker: "{organ}", keyFacts: "Thông tin chính", size: "Kích thước", weight: "Khối lượng", daily: "Mỗi ngày",
    location: "Vị trí", bloodSupply: "Cấp máu", function: "Chức năng",
    medical: "Tầm quan trọng y khoa", didYouKnow: "Bạn có biết", viewLesson: "Xem bài học",
    animate: "Hoạt hình", quiz: "Câu đố", compare: "So sánh",
  },
  compare: {
    title: "So sánh cơ quan", comparing: "Đang so sánh", reference: "Đối chiếu",
    primaryRole: "Vai trò chính", scale: "Tỷ lệ", vs: "với", close: "Đóng phần so sánh",
  },
  cards: {
    resources: "Tài liệu học tập: {organ}",
    microscopic: "Quan sát vi thể", compareOrgans: "So sánh các cơ quan", functionAnimation: "Hoạt hình chức năng",
    clinicalNotes: "Ghi chú lâm sàng", whereItWorks: "Nơi hoạt động", commonConditions: "Bệnh lý thường gặp",
    exploreTissue: "Khám phá mô", openComparison: "Mở phần so sánh", playAnimation: "Phát hoạt hình",
    seeAll: "Xem tất cả", seeSystem: "Xem cả hệ cơ quan",
    playAria: "Phát hoạt hình chức năng: {organ}", systemAria: "Xem vị trí của {organ} trong cơ thể",
  },
  quiz: {
    start: "Bắt đầu câu đố gọi tên", find: "Tìm", progress: "{current} trên {total}",
    correct: "Chính xác", wrong: "Chưa đúng", reveal: "Đó là {label}", answer: "{label} được đánh dấu màu xanh lá",
    done: "Hoàn thành câu đố", score: "Đúng {score} trên {total} câu", retry: "Thử lại",
    exit: "Thoát câu đố", hint: "Nhấp vào chấm tương ứng trên mô hình",
  },
  modal: {
    guided: "Khám phá có hướng dẫn", close: "Đóng", continueExploring: "Tiếp tục khám phá",
    quizTitle: "Câu đố nhanh: {organ}", motionTitle: "{organ} đang hoạt động",
    bodyTitle: "{organ} trong cơ thể", insideTitle: "Bên trong {organ}",
    quizPrompt: "Phát biểu nào mô tả đúng nhất về {organ}?",
    quizA: "Đảm nhiệm một vai trò chuyên biệt trong việc duy trì cơ thể",
    quizB: "Hoạt động hoàn toàn độc lập",
    quizC: "Chỉ hoạt động khi ngủ",
    lessonBody:
      "Hãy lần theo các cấu trúc được làm nổi bật, xoay mẫu vật và gắn kết hình thái với chức năng. Khoảnh khắc học ngắn này được thiết kế để xây dựng một mô hình tư duy bền vững.",
    systemIntro: "{location}. Hãy lần theo cách {organ} kết nối với phần còn lại của cơ thể.",
    system: "Hệ cơ quan", primaryRole: "Vai trò chính", bloodSupply: "Cấp máu",
  },
};
