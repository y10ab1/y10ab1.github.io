# Yueh-Po Peng - Personal Portfolio Website

這是我的個人作品集網站，使用 vCard 模板重新設計。

## 網站內容

- **About**: 個人簡介和專業領域
- **Resume**: 教育背景、工作經歷、研究項目、出版物和技能

## 本地預覽

您可以使用任何網頁伺服器來本地預覽網站。例如：

### 使用 Python 內建伺服器

```bash
# Python 3
python -m http.server 8000

# 然後在瀏覽器中訪問 http://localhost:8000
```

### 使用 Node.js http-server

```bash
npx http-server

# 然後在瀏覽器中訪問 http://localhost:8080
```

## 部署到 GitHub Pages

1. 確保您的 repository 名稱是 `y10ab1.github.io`
2. 將所有變更提交並推送到 GitHub：

```bash
git add .
git commit -m "Update portfolio website with vCard template"
git push origin main
```

3. 在 GitHub repository 設定中：
   - 進入 **Settings** > **Pages**
   - Source 選擇 **Deploy from a branch**
   - Branch 選擇 **main** 和 **/ (root)**
   - 點擊 **Save**

4. 幾分鐘後，您的網站將會在 `https://y10ab1.github.io` 上線

## 自訂

### 更新個人資訊

編輯 `index.html` 文件中的以下部分：

- **個人資料**: 修改 sidebar 區域的姓名、職稱、聯絡方式
- **社交連結**: 更新 social-list 中的連結
- **關於我**: 修改 About 頁面的內容
- **履歷**: 更新 Resume 頁面的經歷、教育、技能等

### 更換頭像

替換 `assets/images/my-avatar.png` 為您自己的頭像照片（建議大小: 80x80px 或更大）

### 修改樣式

如需自訂樣式，請編輯 `assets/css/style.css`

## 技術架構

- **HTML5**: 網頁結構
- **CSS3**: 樣式設計
- **JavaScript**: 互動功能
- **Ionicons**: 圖標庫

## 原始模板

此網站基於 [vCard Personal Portfolio](https://github.com/codewithsadee/vcard-personal-portfolio) 模板，根據個人需求進行了大幅度自訂。

## 授權

MIT License

