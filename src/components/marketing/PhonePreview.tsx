import Image from 'next/image';

export default function PhonePreview() {
  return (
    <div className="relative mx-auto w-[248px]">
      <div className="rounded-[38px] border-[7px] border-ink bg-ink p-1 shadow-preview">
        <div className="overflow-hidden rounded-[31px] bg-paper">
          <Image
            src="/app/wali-home.webp"
            alt="Aplikasi wali Quriva menampilkan progres hafalan, capaian juz, dan pengingat murojaah"
            width={780}
            height={1688}
            sizes="248px"
            className="h-auto w-full"
          />
        </div>
      </div>

      <p className="mt-4 text-center text-[11px] font-medium text-muted">
        Tampilan asli aplikasi wali &middot; akun demo
      </p>
    </div>
  );
}
