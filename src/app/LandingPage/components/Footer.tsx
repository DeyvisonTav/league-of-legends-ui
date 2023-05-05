export function Footer() {
  return (
    <div
      className="h-24 flex justify-center bg-[#252423]
     text-[#e2c283] font-bold text-center items-center text-sm"
    >
      Todos os direitos reservados League-of-Legends-Ui ©{" "}
      {new Date().getFullYear()}
    </div>
  );
}
