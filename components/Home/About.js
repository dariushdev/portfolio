import home from "../../styles/components/Home.module.scss";
export default function About() {
  return (
    <div className={home.about}>
      <p>Hello There! My name is Darius.</p>
      <p>
        I am <mark>Software Developer</mark> and IT Security Enthusiast.{" "}
      </p>
      <p>
        Currently my skillset is focused on Back-End but I'm always ready to
        tackle any challenge.
      </p>
    </div>
  );
}
