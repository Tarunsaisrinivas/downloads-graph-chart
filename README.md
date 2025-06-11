# 📊 Downloads-Graph

A lightweight, reusable React component to visualize **daily NPM download statistics** for any package — built with Chart.js and React ChartJS 2.

---

## 🔍 Description

`downloads-graph` lets you display a beautiful line chart showing the **last 30 days of download activity** for any NPM package. Perfect for documentation, portfolio dashboards, project analytics, or developer tools.

---
## 👁️ Preview
<img src = '/public/image.png' width={150} height ={150} /> 
---
## ✨ Features

- 📦 Fetches real-time data from the [NPM downloads API](https://api.npmjs.org/)
- 📈 Interactive and responsive chart using [Chart.js](https://www.chartjs.org/)
- 🎨 Fully customizable chart styles via props
- ⚡ Works in both **React** and **Next.js** environments
- 📤 Easy to embed in your documentation or stats page

---

## 🚀 Installation

```bash
npm install downloads-graph
# or
yarn add downloads-graph
```

Make sure you also have the required peer dependencies:

```bash
npm install react react-dom chart.js react-chartjs-2
```

---

## 🛠 Usage

```jsx
import DownloadsGraph from "downloads-graph";

export default function App() {
  return (
    <div style={{ height: 400 }}>
      <DownloadsGraph
        packageName="react"
        borderColor="blue"
        backgroundColor="rgba(0, 0, 255, 0.2)"
      />
    </div>
  );
}
```

---

## ⚙️ Props

| Prop              | Type     | Required | Description                                               |
|-------------------|----------|----------|-----------------------------------------------------------|
| `packageName`     | `string` | ✅ Yes    | The name of the npm package to fetch download stats for   |
| `borderColor`     | `string` | ❌ No     | Color of the line border (e.g., `"blue"` or `"#3498db"`)  |
| `backgroundColor` | `string` | ❌ No     | Fill color under the chart line                           |

---

## 🧠 Example

```jsx
<DownloadsGraph
  packageName="vite"
  borderColor="green"
  backgroundColor="rgba(0,255,0,0.1)"
/>
```

---

## ✅ Compatibility

- React 18+
- Next.js 13+
- Vite or CRA supported

---

## 🏷 Keywords

```
react, chart, chartjs, downloads, npm, analytics, stats, graph, npm-stats, chart-component, react-chart, react-chartjs, npm-downloads, nextjs
```

---

## 📄 License

[MIT](./LICENSE)

---

## 🙋‍♂️ Author

Developed by **Tarun Sai Srinivas**  
🔗 [LinkedIn](https://www.linkedin.com/in/tarun-sai-srinivas)  
📦 [npmjs.com/package/downloads-graph](https://www.npmjs.com/package/downloads-graph)
