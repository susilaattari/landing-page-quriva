'use client';

import { useState } from 'react';
import { AlertCircle, CheckCircle2, Copy, Mail, MessageCircle, Send, ShieldAlert, Sparkles } from 'lucide-react';
import { SUPPORT_EMAIL, SUPPORT_WHATSAPP } from '@/lib/config';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  role: string;
  institutionName: string;
  reason: string;
  notes: string;
  confirmed: boolean;
}

const ROLES = [
  { value: 'wali', label: 'Wali Santri / Orang Tua' },
  { value: 'guru', label: 'Guru / Ustadz Pembimbing' },
  { value: 'admin', label: 'Admin / Pengurus Lembaga Tahfidz' },
  { value: 'other', label: 'Lainnya' },
];

const REASONS = [
  'Santri telah lulus atau khatam hafalan',
  'Pindah ke lembaga / sekolah tahfidz lain',
  'Sudah tidak menggunakan aplikasi lagi',
  'Alasan privasi data pribadi',
  'Ingin membuat akun baru',
  'Lainnya',
];

export default function AccountDeletionForm() {
  const [form, setForm] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    role: 'wali',
    institutionName: '',
    reason: REASONS[0],
    notes: '',
    confirmed: false,
  });

  const [ticketId, setTicketId] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.confirmed) return;

    setIsSubmitting(true);

    // Generate kode tiket unik: QDEL-YYMM-XXXX
    const now = new Date();
    const yearMonth = `${now.getFullYear().toString().slice(-2)}${(now.getMonth() + 1).toString().padStart(2, '0')}`;
    const randomHex = Math.random().toString(36).substring(2, 6).toUpperCase();
    const generatedTicket = `QDEL-${yearMonth}-${randomHex}`;

    setTimeout(() => {
      setTicketId(generatedTicket);
      setIsSubmitting(false);
    }, 600);
  };

  const getWhatsAppMessage = () => {
    if (!ticketId) return '';
    return encodeURIComponent(
      `*PERMINTAAN PENGHAPUSAN AKUN & DATA QURIVA*\n` +
        `-----------------------------------------\n` +
        `• No. Tiket: *${ticketId}*\n` +
        `• Nama Lengkap: ${form.fullName}\n` +
        `• Email Terdaftar: ${form.email}\n` +
        `• No. HP / WhatsApp: ${form.phone}\n` +
        `• Peran: ${ROLES.find((r) => r.value === form.role)?.label || form.role}\n` +
        (form.institutionName ? `• Lembaga: ${form.institutionName}\n` : '') +
        `• Alasan: ${form.reason}\n` +
        (form.notes ? `• Catatan: ${form.notes}\n` : '') +
        `-----------------------------------------\n` +
        `Mohon proses penghapusan akun dan data pribadi saya sesuai kebijakan privasi Quriva. Terima kasih.`
    );
  };

  const getEmailSubject = () => {
    return encodeURIComponent(`Permintaan Penghapusan Akun Quriva - ${ticketId || 'Formulir'}`);
  };

  const getEmailBody = () => {
    return encodeURIComponent(
      `Halo Tim Dukungan Quriva,\n\n` +
        `Saya mengajukan permohonan penghapusan akun dan seluruh data pribadi saya di aplikasi Quriva dengan rincian sebagai berikut:\n\n` +
        `No. Tiket: ${ticketId}\n` +
        `Nama Lengkap: ${form.fullName}\n` +
        `Email Terdaftar: ${form.email}\n` +
        `No. WhatsApp / HP: ${form.phone}\n` +
        `Peran Akun: ${ROLES.find((r) => r.value === form.role)?.label || form.role}\n` +
        `Nama Lembaga: ${form.institutionName || '-'}\n` +
        `Alasan Penghapusan: ${form.reason}\n` +
        `Catatan Tambahan: ${form.notes || '-'}\n\n` +
        `Saya memahami bahwa tindakan ini bersifat permanen dan tidak dapat dibatalkan.\n\n` +
        `Terima kasih,\n${form.fullName}`
    );
  };

  const copyTicket = () => {
    if (!ticketId) return;
    navigator.clipboard.writeText(ticketId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-3xl border border-line bg-white p-6 shadow-card sm:p-8">
      {ticketId ? (
        <div className="space-y-6">
          <div className="flex items-center gap-3 text-emerald-700">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
              <CheckCircle2 size={28} />
            </span>
            <div>
              <h3 className="text-xl font-bold text-ink">Permintaan Berhasil Dibuat</h3>
              <p className="text-sm text-muted">Tiket penghapusan data Anda telah terdaftar.</p>
            </div>
          </div>

          <div className="rounded-2xl border border-dashed border-line bg-sand/60 p-4 sm:p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">Nomor Tiket Permintaan</p>
            <div className="mt-1 flex items-center justify-between gap-3">
              <span className="font-mono text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
                {ticketId}
              </span>
              <button
                type="button"
                onClick={copyTicket}
                className="inline-flex items-center gap-1.5 rounded-xl border border-line bg-white px-3 py-1.5 text-xs font-semibold text-ink shadow-sm hover:border-brand hover:text-brand"
              >
                <Copy size={13} />
                {copied ? 'Tersalin!' : 'Salin Tiket'}
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-line bg-white p-4 text-sm leading-relaxed text-muted space-y-2">
            <p className="font-semibold text-ink">Langkah Selanjutnya:</p>
            <p>
              Untuk memverifikasi bahwa Anda adalah pemilik sah akun ini, silakan konfirmasikan nomor tiket di atas
              melalui salah satu kanal resmi kami di bawah ini:
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {SUPPORT_WHATSAPP && (
              <a
                href={`https://wa.me/${SUPPORT_WHATSAPP}?text=${getWhatsAppMessage()}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
              >
                <MessageCircle size={18} />
                Konfirmasi via WhatsApp
              </a>
            )}

            <a
              href={`mailto:${SUPPORT_EMAIL}?subject=${getEmailSubject()}&body=${getEmailBody()}`}
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-line bg-white px-4 py-3 text-sm font-semibold text-ink shadow-sm transition hover:border-brand hover:text-brand"
            >
              <Mail size={18} />
              Konfirmasi via Email
            </a>
          </div>

          <div className="rounded-xl bg-amber-50 p-4 text-xs text-amber-900 border border-amber-200/60 leading-relaxed">
            <p className="font-bold flex items-center gap-1.5 mb-1">
              <AlertCircle size={14} className="text-amber-700 shrink-0" />
              Estimasi Waktu Pemrosesan:
            </p>
            Data akun akan diverifikasi dan dihapus permanen dalam waktu <strong>maksimal 7 hari kerja</strong> setelah
            verifikasi kepemilikan akun selesai.
          </div>

          <button
            type="button"
            onClick={() => {
              setTicketId(null);
              setForm({
                fullName: '',
                email: '',
                phone: '',
                role: 'wali',
                institutionName: '',
                reason: REASONS[0],
                notes: '',
                confirmed: false,
              });
            }}
            className="text-xs font-semibold text-muted hover:text-ink underline block text-center pt-2"
          >
            Ajukan permohonan untuk akun lain
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="border-b border-line pb-4">
            <h3 className="text-lg font-bold text-ink">Formulir Permintaan Penghapusan Data</h3>
            <p className="mt-1 text-xs text-muted leading-relaxed">
              Isi data di bawah ini sesuai informasi yang Anda gunakan saat mendaftar di Quriva.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="fullName" className="block text-xs font-bold text-ink mb-1.5">
                Nama Lengkap <span className="text-rose-600">*</span>
              </label>
              <input
                id="fullName"
                type="text"
                required
                value={form.fullName}
                onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                placeholder="Contoh: Ahmad Fauzi"
                className="w-full rounded-xl border border-line bg-surface px-3.5 py-2.5 text-sm text-ink placeholder:text-muted/60 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
              />
            </div>

            <div>
              <label htmlFor="role" className="block text-xs font-bold text-ink mb-1.5">
                Peran Akun di Quriva <span className="text-rose-600">*</span>
              </label>
              <select
                id="role"
                value={form.role}
                onChange={(e) => setForm({ ...form, role: e.target.value })}
                className="w-full rounded-xl border border-line bg-surface px-3.5 py-2.5 text-sm text-ink focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
              >
                {ROLES.map((r) => (
                  <option key={r.value} value={r.value}>
                    {r.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="email" className="block text-xs font-bold text-ink mb-1.5">
                Alamat Email Terdaftar <span className="text-rose-600">*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="nama@email.com"
                className="w-full rounded-xl border border-line bg-surface px-3.5 py-2.5 text-sm text-ink placeholder:text-muted/60 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs font-bold text-ink mb-1.5">
                Nomor WhatsApp / HP Terdaftar <span className="text-rose-600">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="0812xxxxxxxx"
                className="w-full rounded-xl border border-line bg-surface px-3.5 py-2.5 text-sm text-ink placeholder:text-muted/60 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
              />
            </div>
          </div>

          <div>
            <label htmlFor="institutionName" className="block text-xs font-bold text-ink mb-1.5">
              Nama Lembaga / Rumah Tahfidz <span className="text-muted font-normal">(opsional)</span>
            </label>
            <input
              id="institutionName"
              type="text"
              value={form.institutionName}
              onChange={(e) => setForm({ ...form, institutionName: e.target.value })}
              placeholder="Contoh: Rumah Tahfidz Al-Hikmah"
              className="w-full rounded-xl border border-line bg-surface px-3.5 py-2.5 text-sm text-ink placeholder:text-muted/60 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
            />
          </div>

          <div>
            <label htmlFor="reason" className="block text-xs font-bold text-ink mb-1.5">
              Alasan Penghapusan Akun
            </label>
            <select
              id="reason"
              value={form.reason}
              onChange={(e) => setForm({ ...form, reason: e.target.value })}
              className="w-full rounded-xl border border-line bg-surface px-3.5 py-2.5 text-sm text-ink focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
            >
              {REASONS.map((reason) => (
                <option key={reason} value={reason}>
                  {reason}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="notes" className="block text-xs font-bold text-ink mb-1.5">
              Catatan Tambahan <span className="text-muted font-normal">(opsional)</span>
            </label>
            <textarea
              id="notes"
              rows={3}
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              placeholder="Tuliskan keterangan tambahan jika ada..."
              className="w-full rounded-xl border border-line bg-surface px-3.5 py-2.5 text-sm text-ink placeholder:text-muted/60 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand resize-none"
            />
          </div>

          <div className="rounded-2xl border border-line bg-sand/40 p-4">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                required
                checked={form.confirmed}
                onChange={(e) => setForm({ ...form, confirmed: e.target.checked })}
                className="mt-1 h-4 w-4 rounded border-line text-brand focus:ring-brand"
              />
              <span className="text-xs text-ink leading-relaxed">
                Saya mengonfirmasi bahwa saya adalah pemilik akun ini dan memahami bahwa{' '}
                <strong>penghapusan akun bersifat permanen</strong>. Seluruh riwayat hafalan, kredensial, dan rekaman
                audio terkait akun ini akan dihapus dan tidak dapat dipulihkan kembali.
              </span>
            </label>
          </div>

          <button
            type="submit"
            disabled={!form.confirmed || isSubmitting}
            className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-rose-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-rose-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ShieldAlert size={18} />
            {isSubmitting ? 'Memproses Permintaan...' : 'Ajukan Penghapusan Akun & Data'}
          </button>
        </form>
      )}
    </div>
  );
}
