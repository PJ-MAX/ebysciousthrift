export default function InfoStrip() {
return (
<div className="bg-white shadow-sm rounded-md p-3 my-4">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
<div className="flex items-center gap-4 text-sm">
<div className="flex items-center gap-2">⏰ <span>Mon–Sat: 8;30am — 6pm</span></div>
<div className="hidden sm:flex items-center gap-2">🚗 <span>Easy parking</span></div>
</div>
<div className="text-sm">Tap any product to message us on WhatsApp to reserve or ask for sizes.</div>
</div>
</div>
);
}