import PhoneFrame from '@/components/ui/PhoneFrame';

export default function PhonePreview() {
  return (
    <div className="relative mx-auto w-full max-w-[270px]">
      <PhoneFrame
        src="/app/wali-home.webp"
        alt="Aplikasi wali Quriva menampilkan progres hafalan, capaian juz, dan pengingat murojaah"
        sizes="260px"
        widthClass="w-[220px] sm:w-[248px]"
        badge="App Wali & Guru"
      />
      <p className="mt-4 text-center text-[11px] font-medium text-muted">
        Tampilan asli aplikasi wali &middot; akun demo
      </p>
    </div>
  );
}
