import { SignInButton, SignUpButton, SignedOut } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="h-screen">
      <SignedOut>
        <SignInButton>
          Login
        </SignInButton>
      </SignedOut>
      <SignUpButton>
        Get Started
      </SignUpButton>
    </div>
  )
}