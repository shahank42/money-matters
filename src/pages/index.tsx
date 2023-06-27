import Head from "next/head";
import { SignIn, SignOutButton, useUser } from "@clerk/nextjs";
import { SignInButton } from "@clerk/nextjs";

export default function Home() {
  const user = useUser();

  return (
    <>
      <Head>
        <title>Money Matters</title>
        <meta name="description" content="A personal expense tracker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {!user.isSignedIn && (
          <SignInButton mode="modal">
            <button className="btn">Sign in</button>
          </SignInButton>
        )}

        {!!user.isSignedIn && <SignOutButton />}

        <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
      </main>
    </>
  );
}
