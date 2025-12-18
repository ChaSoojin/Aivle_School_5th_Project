export async function generateStaticParams() {
  return [
    { bookid: "1" },
    { bookid: "2" },
    { bookid: "3" },
  ];
}

export default function BookLayout({ children }) {
  return children;
}
