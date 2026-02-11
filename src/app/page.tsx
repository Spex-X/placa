import StarAnimation from '@/components/StarAnimation';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 font-sans relative">
      <StarAnimation />
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-16 relative z-10">
        <h1 className="text-4xl font-bold text-white drop-shadow-lg">
          Site em desenvolvimento
        </h1>
      </main>
    </div>
  );
}
