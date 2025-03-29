import profilePic from "../assets/profilePic.jpeg"

export function Nav(props) {
  const { activeSection, setActiveSection, sections } = props;

  return (
    <section className="fixed top-10 left-10 bottom-10 w-[25%] bg-base-100 shadow-md flex flex-col items-center p-6 rounded-xl">
        <h1 className="text-primary text-2xl">Eleni Page</h1>
      <figure className="px-10 pt-10">
        <img
          src={profilePic}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <section className="card-body items-center text-center">
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <section className="card-actions">
          <ul className="menu px-1">
            {sections.map(({ id, label }) => (
              <li key={id} className="items-center">
                <a
                  onClick={() => {
                    document.getElementById(id)?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                  className={`text-center ${
                    activeSection === id
                      ? "text-primary"
                      : "text-primary-content"
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </section>
        <ul className="menu menu-horizontal">
          <li>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              className="block text-gray-600 hover:text-blue-500 mb-2"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/yourprofile"
              target="_blank"
              className="block text-gray-600 hover:text-blue-500"
            >
              GitHub
            </a>
          </li>
        </ul>
      </section>
    </section>
  );
}
