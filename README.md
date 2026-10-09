# vinext-starter

Một bộ khởi tạo full-stack gọn gàng chạy trên
[vinext](https://github.com/cloudflare/vinext), có hỗ trợ tuỳ chọn Cloudflare D1 và
Drizzle.

## Yêu cầu

- Node.js `>=22.13.0`

## Bắt đầu nhanh

```bash
npm install
npm run dev
npm run build
```

Bộ khởi tạo này không dùng `wrangler.jsonc`.

## Cấu trúc đi kèm

- chỉnh sửa mã nguồn của trang trong thư mục `app/`
- `.openai/hosting.json` khai báo các liên kết (binding) D1 và R2 tuỳ chọn của Sites
- `vite.config.ts` mô phỏng các binding đã khai báo khi phát triển cục bộ
- `db/schema.ts` được để trống có chủ ý
- `examples/d1/` chứa một ví dụ D1 tuỳ chọn
- `drizzle.config.ts` hỗ trợ tạo migration cục bộ khi cần

## Ngôn ngữ

Giao diện mặc định là tiếng Việt (`vi`). Các ngôn ngữ khác vẫn có trong bộ chuyển
ngôn ngữ. Bản dịch nằm ở `app/i18n/ui/` (giao diện) và `app/i18n/organs/` (nội dung
cơ quan). Dùng `npm run i18n:audit` để kiểm tra các bản dịch.

## Header xác thực không gian làm việc

Các trang trong không gian làm việc OpenAI có thể đọc email của người dùng hiện tại
từ `oai-authenticated-user-email`.

Các trang xác thực bằng SIWC cũng có thể nhận thêm
`oai-authenticated-user-full-name` khi hồ sơ SIWC của người dùng có claim `name`
không rỗng. Giá trị họ tên được mã hoá phần trăm theo UTF-8 và đi kèm
`oai-authenticated-user-full-name-encoding: percent-encoded-utf-8`.

Hãy coi họ tên là tuỳ chọn và dùng email thay thế khi không có:

```tsx
import { headers } from "next/headers";

export default async function Home() {
  const requestHeaders = await headers();
  const email = requestHeaders.get("oai-authenticated-user-email");
  const encodedFullName = requestHeaders.get("oai-authenticated-user-full-name");
  const fullName =
    encodedFullName &&
    requestHeaders.get("oai-authenticated-user-full-name-encoding") ===
      "percent-encoded-utf-8"
      ? decodeURIComponent(encodedFullName)
      : null;

  const displayName = fullName ?? email;
  // ...
}
```

## Đăng nhập ChatGPT tuỳ chọn do Dispatch quản lý

Nhập các hàm hỗ trợ có sẵn từ `app/chatgpt-auth.ts` khi trang cần đăng nhập ChatGPT
(tuỳ chọn hoặc bắt buộc):

- Dùng `getChatGPTUser()` cho giao diện đăng nhập tuỳ chọn.
- Dùng `requireChatGPTUser(returnTo)` cho các trang render phía máy chủ cần chuyển
  khách vô danh qua bước Đăng nhập bằng ChatGPT.
- Dùng `chatGPTSignInPath(returnTo)` và `chatGPTSignOutPath(returnTo)` cho các liên
  kết hoặc thao tác trên trình duyệt.
- Truyền vào đường dẫn `returnTo` tương đối, cùng nguồn gốc (same-origin) cho trang
  đích sau khi đăng nhập hoặc đăng xuất. Hàm hỗ trợ sẽ kiểm tra và mã hoá an toàn.
- Đánh dấu các trang được bảo vệ bằng `export const dynamic = "force-dynamic"` vì
  chúng phụ thuộc vào header danh tính theo từng yêu cầu.

Dispatch sở hữu `/signin-with-chatgpt`, `/signout-with-chatgpt`, `/callback`, các
cookie OAuth và việc chèn header danh tính. Không tự triển khai route ứng dụng cho
những đường dẫn được dành riêng này. Các route không nhập và gọi hàm hỗ trợ vẫn tương
thích với truy cập vô danh.

SIWC chỉ xác lập danh tính; nó không chứng minh tư cách thành viên không gian làm
việc. Hãy dùng các chính sách kiểm soát truy cập của nền tảng lưu trữ Sites cho các
giới hạn trên toàn không gian làm việc, hoặc tự kiểm tra tư cách thành viên/danh sách
cho phép rõ ràng ở phía máy chủ.

Dùng SIWC cho các trang tài khoản, bảng điều khiển riêng của người dùng, dữ liệu đã
lưu và các thao tác ghi gắn với người dùng ChatGPT hiện tại. Để nội dung công khai ở
chế độ vô danh.

## Các lệnh hữu ích

- `npm run dev`: khởi động môi trường phát triển cục bộ
- `npm run build`: kiểm tra kết quả build của vinext
- `npm test`: build bộ khởi tạo và kiểm tra khung tải được render
- `npm run db:generate`: tạo migration Drizzle sau khi thay đổi schema
- `npm run i18n:audit`: kiểm tra các bản dịch

## Tìm hiểu thêm

- [Tài liệu vinext](https://github.com/cloudflare/vinext)
- [Hướng dẫn Drizzle D1](https://orm.drizzle.team/docs/get-started/d1-new)
