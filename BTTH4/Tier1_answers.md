# Tier 1 Answers

## Tại sao component chỉ render 1 lần?

Vì khi tải trang lần đầu React gọi component để tạo giao diện.

## Khi nào component render lại?

Khi state thay đổi bằng setState hoặc useState.

## Khác nhau giữa biến thường và useState?

Biến thường thay đổi nhưng giao diện không cập nhật.
useState thay đổi sẽ kích hoạt re-render và cập nhật giao diện.

## Luồng hoạt động của React?

User Action
→ setState
→ Re-render
→ JSX mới
→ React cập nhật giao diện