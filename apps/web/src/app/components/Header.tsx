export default function Header() {
  /* 
    need have a logo Ling Z.
    need to have tabs for blog, notes, about, life
    */
  return (
    <div className="flex-row-center">
      <div className="w-full max-w-screen-lg bg-primary p-6 rounded-b-2xl">
        <div className="flex-row-between gap-3">
          <div className="flex-row-center">Ling Z.</div>
          <div className="flex-row-center gap-3">
            <div>Blog</div>
            <div>Notes</div>
            <div>About</div>
            <div>Life</div>
          </div>
        </div>
      </div>
    </div>
  );
}
