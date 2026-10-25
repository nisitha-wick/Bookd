import { auth, signIn, signOut } from "@/auth";

export default async function Home() {
  const session = await auth();

  return (
    <main className="p-8">
      {session ? (
        <form
          action={async () => {
            "use server";
            await signOut({ redirectTo: "/" });
          }}
        >
          <p className="mb-4">
            Signed in as {session.user.name} ({session.user.id})
          </p>
          <button className="rounded bg-white px-4 py-2 text-black">
            Sign out
          </button>
        </form>
      ) : (
        <form
          action={async () => {
            "use server";
            await signIn("github", { redirectTo: "/" });
          }}
        >
          <button className="rounded bg-white px-4 py-2 text-black">
            Sign in with GitHub
          </button>
        </form>
      )}
    </main>
  );
}