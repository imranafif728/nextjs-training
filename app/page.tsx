import ButtonLogin from "@/components/ButtonLogin";

export default function Home() {
  const isLoggedIn = false;
  const name = "Marc";

  return (
    <main>
      <h1>Collect customer feedback to build better products.</h1>
      <div>Create a feedback  boards in minute, prioritize features, and build a products your customer will loves</div>
      
      <ButtonLogin isLoggedIn={isLoggedIn} name={name}></ButtonLogin>
    </main>
  );
}
