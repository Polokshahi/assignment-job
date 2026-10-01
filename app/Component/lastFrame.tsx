



export default function LastFrame() {

    const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

  return (
    <section className="relative w-full overflow-hidden bg-[#FAFAFA] font-[Poppins,sans-serif]">
      {/* Background blobs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-[38%] top-[-40px] h-[380px] w-[380px] rounded-full bg-[#D4FF1F]/60 blur-[90px]" />
        <div className="absolute -right-[120px] top-[120px] h-[360px] w-[360px] rounded-full bg-[#C8F53A]/60 blur-[100px]" />
        <div className="absolute -bottom-[140px] -left-[120px] h-[340px] w-[340px] rounded-full bg-[#7C9CF0]/50 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1122px] px-5 py-14 md:px-[90px] md:py-[70px]">
        {/* Header */}
        <div className="grid items-center gap-6 md:grid-cols-2 md:gap-16">
          <h2 className="text-3xl font-semibold leading-[1.3] text-black md:text-[38px]">
            Discover What Our Community Is Saying
          </h2>
          <p className="text-sm leading-[1.75] text-[#4B4B4B]">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid items-start gap-5 md:mt-[60px] md:grid-cols-3">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="rounded-3xl bg-white p-5 shadow-[0_2px_20px_rgba(0,0,0,0.03)]"
            >
              <img
                src={t.avatar}
                alt={t.name}
                width={64}
                height={64}
                loading="lazy"
                className="h-16 w-16 rounded-full object-cover"
              />
              <h3 className="mt-5 text-base font-semibold text-black">
                {t.name}
              </h3>
              <p className="mt-1 text-sm text-[#0038E0]">{t.role}</p>
              <p className="mt-6 text-sm leading-[1.65] text-[#4B4B4B]">
                &quot;{t.quote}&quot;
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}