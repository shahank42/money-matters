import Head from "next/head";
import { SignOutButton, useUser } from "@clerk/nextjs";
import { api } from "~/utils/api";

export default function Home() {
  const user = useUser();

  const { data } = api.expenses.getAll.useQuery();

  return (
    <>
      <Head>
        <title>Money Matters</title>
        <meta name="description" content="A personal expense tracker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {!!user.isSignedIn && (
        <main>
          <SignOutButton />
          <h2>My Expenses</h2>
          <div>
            {data?.map((expense) => (
              <div key={expense.id}>
                {expense.amount}
                <br />
                {expense.purpose}
              </div>
            ))}
          </div>
        </main>
      )}
    </>
  );
}
