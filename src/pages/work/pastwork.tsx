import React, { useState, useRef } from "react";
import "../../styles/pastwork.css"; // Import the CSS file

interface Project {
  name: string;
  year: number;
  images: string[];
  description: JSX.Element;
  credits: JSX.Element;
}

const projects: Project[] = [
  {
    name: "Netizens",
    year: 2022,
    images: [
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725892983/PastWork/Netizens/Look1003_pzibpl.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725892978/PastWork/Netizens/0001_uoyk6v.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725892984/PastWork/Netizens/Look2a_hvmhqc.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725892985/PastWork/Netizens/Look2_g78fch.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725892979/PastWork/Netizens/Look3a_ixghil.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725892979/PastWork/Netizens/Look3_tot4id.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725892986/PastWork/Netizens/0050_tdfnqk.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725892986/PastWork/Netizens/0001_6_x0pwmh.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725892988/PastWork/Netizens/0132_nxwude.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725892989/PastWork/Netizens/0276_1_adw5uu.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725892990/PastWork/Netizens/0206_x645bz.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725892994/PastWork/Netizens/Look1_9_cpsugj.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725892994/PastWork/Netizens/Look1_10_xxccq2.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725892992/PastWork/Netizens/Horselook001_3_aftteu.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725892991/PastWork/Netizens/Horselook001_2_yvln19.png",
    ],
    description: (
      <span>
        <strong>Netizens Collective</strong> is an interdisciplinary,
        concept-driven digital fashion group founded by fashion designer{" "}
        <strong>Sól Hansdóttir</strong>
        and <strong>Digital Sigga</strong>. Though Netizens managed to produce
        their first collection, the project was temporarily paused due to other
        commitments.
        <br />
        <br />
        The collective’s only experimental collection, <em>Kuml</em>, is an
        innovative fashion film inspired by the concept of "Burials and Grave
        Goods" (<em>Kuml og haugfé</em>) from the Viking Age. This future-facing
        afterlife experiment explores the notion of rebirth in a digital world,
        imagining how burial traditions might evolve. In Viking times, items
        such as jewelry, tools, and even animals were interred with the dead,
        and <em>Kuml</em> reimagines these practices for the digital age.
        <br />
        <br />
        The <em>Kuml</em> collection includes three distinct looks, each set in
        a separate architectural monument designed by architect{" "}
        <strong>Arís Eva Vilhelmsdóttir</strong>, with each site evoking a
        burial space. The project was awarded a grant by the Icelandic Design
        Fund.
        <br />
        <br />
        The <em>Kuml</em> fashion film debuted at Dutch Design Week 2022 and was
        later showcased at Design March 2023 in the Nordic House Iceland. It
        also featured at Hafnarhaus for Vetrarhátið and again for Menningarnótt
        2024.
        <br />
        <br />
        <a
          href="https://www.youtube.com/watch?v=Pv49iZMVhDA"
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch the film here.
        </a>
      </span>
    ),
    credits: (
      <span>
        <strong>Art direction & Fashion</strong> Sigríður Birna Matthíasdóttir &
        Sólveig Dóra Hansdóttir
        <br />
        <strong>Architecture</strong> Arís Eva Vilhelmsdóttir
        <br />
        <strong>Sound</strong> Jack Armitage & Ari Árelíus
      </span>
    ),
  },
  {
    name: "Human human",
    year: 2021,
    images: [
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725911719/PastWork/Human%20human/look_4_back_cwdlvh.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725911721/PastWork/Human%20human/rendera4_x6rit2.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725911749/PastWork/Human%20human/rendernr444444_73_kzm4jj.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725911766/PastWork/Human%20human/rendera4_63_agnf9m.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725911760/PastWork/Human%20human/rendera4_34_lql9xb.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725911729/PastWork/Human%20human/look3vol22_45_j6ueyo.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725911719/PastWork/Human%20human/look3render2_u72ej0.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725911718/PastWork/Human%20human/look_12_hshcv8.png",
    ],
    description: (
      <span>
        <strong>Human Human</strong> is an experimental project inspired by
        Brian Christian’s book
        <em>
          The Most Human Human: What Talking with Computers Teaches Us About
          What It Means to Be Alive
        </em>
        . It explores the potential of AI to engage with creativity, emotional
        intelligence, and self-awareness.
        <br />
        <br />
        Through structured dialogues, the project pushes ChatGPT beyond its
        computational abilities, probing its originality, empathy, and
        introspection. These conversations challenge the boundaries between
        artificial and human thought, raising questions about the nature of
        intelligence and what defines humanity in a world of evolving
        technology.
        <br />
        <br />
        More than a tech experiment, <em>Human Human</em> is a reflection on the
        convergence of organic and synthetic realms, urging viewers to
        reconsider what it means to be human as the line between man and machine
        blurs. Ultimately, it asks us to reflect on thought, emotion, and
        creativity in a world where AI increasingly mimics human traits.
        <br />
        <br />
        <em>
          <a
            href="https://www.youtube.com/watch?v=gRijSnyp6WE&t=7s"
            target="_blank"
            rel="noopener noreferrer"
          >
            Human human, conversation with AI, video 1.
          </a>
          <a
            href="https://www.youtube.com/watch?v=onpWtah3Dks"
            target="_blank"
            rel="noopener noreferrer"
          >
            Human human, conversation with AI, video 2.
          </a>
          <a
            href="https://www.youtube.com/watch?v=Ke4yYlSzUvI&t=3s"
            target="_blank"
            rel="noopener noreferrer"
          >
            Human human, conversation with AI, video 3.
          </a>
        </em>{" "}
        Human human was presented at the Gerðarsafn Museum in 2021.
      </span>
    ),
    credits: (
      <span>
        <strong>Sound</strong> Bjarki
      </span>
    ),
  },
  {
    name: "The Second Self",
    year: 2020,
    images: [
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725958571/PastWork/SecondSelf/simi_i_klofi_7_asfbfu.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725958573/PastWork/SecondSelf/simi_i_klofi_8_wycwws.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725958583/PastWork/SecondSelf/vol1_gpnh9y.jpg",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725958563/PastWork/SecondSelf/sfffs_az0w2i.jpg",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725958578/PastWork/SecondSelf/studiosssss_qs2sf7.jpg",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725958557/PastWork/SecondSelf/Look_i_vinnslu_11_fbwqsl.jpg",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725958544/PastWork/SecondSelf/Linger1e_e4etke.jpg",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725958541/PastWork/SecondSelf/Look_i_vinnslu_2_za5kzx.jpg",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725958530/PastWork/SecondSelf/glittergrl4_qko33b.jpg",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725958528/PastWork/SecondSelf/glitter_grl1_gzjsf6.jpg",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725958525/PastWork/SecondSelf/glittergrl2_mvsjjd.jpg",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725958520/PastWork/SecondSelf/Default_Modelist_4_axjpwt.jpg",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725958522/PastWork/SecondSelf/Default_Modelist_6_bghxaf.jpg",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725958518/PastWork/SecondSelf/Default_Modelist_5_aorl22.jpg",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725958484/PastWork/SecondSelf/medtippiipeys_12_ltvahs.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725958479/PastWork/SecondSelf/Penis_2_umcecy.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725958462/PastWork/SecondSelf/hanskataska_project_22_vozd4w.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725958448/PastWork/SecondSelf/handataska_%C3%B0projevt_39_t5vfpg.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725958425/PastWork/SecondSelf/faranlegssta_lookid_2_xj9yqs.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725958420/PastWork/SecondSelf/faranlegssta_lookid_3_t81rx8.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725958415/PastWork/SecondSelf/Default_Modelist_3_ao52da.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725958403/PastWork/SecondSelf/skikkjavol1_1_q3bvae.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725958401/PastWork/SecondSelf/skikkjavol1_2_bbqdpa.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725958263/PastWork/SecondSelf/tv%C3%A6r_linur_ut_2_jz2pij.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725958257/PastWork/SecondSelf/tvo_fot_hanga_a_sla_1_jo45es.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725958254/PastWork/SecondSelf/fot_hanga_utum_eyru_1_i8le8i.png",
    ],
    description: (
      <span>
        <>
          <p>
            Following the project <em>"Do It for the Gram"</em>, the journey
            with the digital avatar — an uncanny replica of the creator —
            evolved into a deeper exploration of digital identity. This project
            focuses on the objectification of the self in the virtual world and
            the complex ethical questions that arise in the digital frontier.
          </p>
          <p>
            Inspired by works such as Elizabeth Wilson’s{" "}
            <em>Adorned in Dreams</em> and Jean Baudrillard’s{" "}
            <em>Simulacra and Simulation</em>, the avatar's exploration
            highlights the dual role of the self as both observer and observed
            in a society where identities are constantly curated, commodified,
            and consumed online. The digital avatar became a key tool in
            understanding how we package, present, and perceive ourselves in the
            digital age.
          </p>
          <p>
            The ethical landscape of platforms like OnlyFans was a significant
            focus. Through the avatar, the project raises questions about
            digital consent, agency, and the commodification of virtual
            identity. What happens when a digital replica, representing the
            self, becomes an object for consumption?
          </p>
          <p>
            Drawing from Eric Hoffman’s <em>The Performance of the Self</em>,
            the project examined the performative nature of online personas,
            exploring how they influence audience perceptions and expectations.
            Virtual celebrities like Hatsune Miku and Gorillaz further deepened
            the discussion on how we relate to fully digital beings, and whether
            they reflect society’s increasing immersion into a virtual world.
          </p>
          <p>
            Donna Haraway’s <em>Staying with the Trouble</em> provided a guiding
            framework, suggesting that the divide between the digital and real
            is increasingly blurred, if it ever truly existed. The avatar's
            evolution into a touchpoint for exploring identity, objectification,
            and ethics encourages reflection on how technology continues to
            reshape our values and perceptions of reality.
          </p>
        </>
      </span>
    ),
    credits: undefined,
  },
  {
    name: "AR filters",
    year: 2019,
    images: [
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725986251/PastWork/Filters/Sigridur_Birna_Filtorial_Rakata_yye8zy.jpg",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725986247/PastWork/Filters/Rakata_Acid_from_Sigri%CC%81%C3%B0ur_Birna_o0ljsq.jpg",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725986247/PastWork/Filters/Rakata_Acid_from_Sigri%CC%81%C3%B0ur_Birna_o0ljsq.jpg",
    ],
    description: (
      <span>
        <h3>Augmented Identity: </h3>
        <h3>AR, Instagram, and Digital Self-Expression</h3>
        <p>
          In 2019, a significant shift in digital self-expression was ushered in
          when Instagram made its Spark AR Studio accessible to the general
          public. This move went beyond mere technological expansion; it
          heralded a new era of digital identity exploration.
        </p>
        <p>
          The relationship between our online and offline personas has been a
          topic of great interest. Studies have illuminated both the advantages
          and drawbacks of social media engagement. While some research points
          to potential negative effects, such as feelings of loneliness and
          depression, a positive use of these platforms can also foster
          self-esteem and well-being. With technologies like AR, the divide
          between the virtual and physical becomes less pronounced. It's
          increasingly clear that our digital and physical lives exist in
          symbiosis, with each aspect influencing the other.
        </p>
        <p>
          AR's essence lies in its ability to overlay digital elements onto our
          physical world. This is most evident in the popular face filters found
          on Instagram. These filters offer both playful and serious
          modifications to one's appearance, acting as digital makeup or masks.
        </p>
        <p>
          The democratization of AR tools, like Spark AR Studio, has empowered
          designers and creatives to embark on innovative ventures. They've
          taken the concept of the digital self and expanded it, crafting
          surreal representations that blend the real and the virtual. Through
          such explorations, the boundaries between our online personas and
          real-world identities blur, highlighting the intertwined nature of our
          existence in both domains.
        </p>
        <p>
          In essence, the advancements facilitated by platforms like Spark AR
          Studio emphasize the convergence of our digital and physical
          identities, showing how technology not only extends our capabilities
          but also reshapes our perception and expression of the self.
        </p>
        <a
          href="https://hadesignmag.is/wp-content/uploads/2019/11/G81A7826-1.jpg"
          target="_blank"
          rel="noopener noreferrer"
        >
          HA Magazine
        </a>
      </span>
    ),
    credits: undefined,
  },
  {
    name: "Do it for the Gram",
    year: 2019,
    images: [
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725990592/PastWork/doitforthe/Editorial_6_ruxfwh.jpg",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725990587/PastWork/doitforthe/Editorial_3_jzsqrf.jpg",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725990589/PastWork/doitforthe/Editorial_2_bzpesy.jpg",
    ],
    description: (
      <span>
        <h3>Do It for the Gram</h3>
        <p>
          Cyborg Anthropology, a field concerned with the blend of humans and
          technology, introduces the concept of the 'Second Self' as a
          descriptor for one's online or external identity. This online persona
          doesn't merely exist in parallel with our offline existence; it is
          becoming an integral extension of our true selves. Just as we care for
          our offline image, the online self demands attention, maintenance, and
          presentation.
        </p>
        <p>
          A paradigm shift in the age of social media has democratized
          influence. Fashion titans, acclaimed brands, and influential magazines
          have seen their power wane, giving way to everyday individuals on
          platforms like Instagram. This democratization has led to the
          commercialization of influence, with regular individuals now
          monetizing their vast online followings by endorsing products,
          particularly in the fashion industry.
        </p>
        <p>
          However, this trend comes with its own caveats. Instagram influencers
          often display a constant stream of new products, perpetuating the
          notion that once showcased, an item should never be repeated. This
          relentless cycle of consumption and display hints at the ever-evolving
          nature of our 'Second Self'.
        </p>
        <p>
          In the digital age, there has been a burgeoning potential to
          articulate oneself through virtual fashion, bypassing the need for
          physical material goods. The importance of adorning the body,
          virtually or physically, remains consistent. Yet, in the virtual
          realm, the body undergoes a transformation. It becomes a cyborg
          entity, more malleable and perfectible than its biological
          counterpart. Moreover, events in the virtual space don't occur in
          isolation; they ripple into the physical realm, influencing and being
          influenced by tangible occurrences.
        </p>
        <p>
          Delving into this concept, the project's approach was inherently
          reflexive. Given its concern with the performance of the self, the
          creator became the muse. This journey was one of introspection,
          experimentation, and visual translation. Complexities emerged at every
          turn, necessitating a multi-faceted exploration.
        </p>
        <p>
          The project's speculative nature led to the creation of a
          photorealistic avatar, an embodiment of the designer, pushing the
          boundaries of what defines reality and identity in digital spaces.
        </p>
        <p>
          In a climactic culmination, the final exhibition juxtaposed the
          creator's digital and physical identities. Videos of the designer and
          her avatar, both adorned in similar fashion, oscillated between the
          real and the virtual, prompting viewers to ponder the interplay
          between these realms.
        </p>
        <p>
          At its core, "Do It for the Gram" doesn't seek to provide definitive
          answers. Instead, as a speculative design project, it nudges viewers
          towards introspection. What does authenticity mean in a digital age?
          If an avatar, a true replica of oneself, acts in a controversial
          manner, who bears the responsibility? This project is an invitation to
          question, to reflect, and to understand the evolving dance between our
          primary and second selves in an increasingly digital world.
        </p>
      </span>
    ),
    credits: undefined,
  },
  {
    name: "Piece of me",
    year: 2018,
    images: [
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725991250/PastWork/piece%20of%20me/DSCF0058_hxfgwz.jpg",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725991254/PastWork/piece%20of%20me/DSCF0063_kycj9k.jpg",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725991259/PastWork/piece%20of%20me/DSCF0056_s1dyoo.jpg",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725991264/PastWork/piece%20of%20me/CounterPoint_209_ggzzo5.jpg",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725991267/PastWork/piece%20of%20me/CounterPoint_210_ih4go7.jpg",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725991270/PastWork/piece%20of%20me/CounterPoint_214_c1wgqw.jpg",
    ],
    description: (
      <span>
        <h3>Piece of Me</h3>
        <p>
          Continuing from the foundations set by the "Digital Paper Doll"
          project, Digital Sigga delved deeper into the interplay between the
          virtual and physical worlds. The next endeavor, titled "Piece of Me,"
          saw her grappling with a pivotal question: Would the culmination of
          her exploration be a tangible representation of the virtual or a
          virtual manifestation of the physical?
        </p>
        <p>
          In pursuit of this answer, Digital Sigga experimented with both
          realms. She took plaster imprints of various body parts while
          concurrently venturing into 3D scanning. This learning journey wasn't
          without its pitfalls, resulting in unexpected malfunctions and
          glitches. Interestingly, many find that these glitches in
          computer-generated imagery possess a certain aesthetic appeal, a
          sentiment with which Digital Sigga resonated. Her ambition for "Piece
          of Me" was to bridge the digital to the tangible, both in aesthetics
          and philosophy.
        </p>
        <p>
          In the realm of social media, individuals often present a meticulously
          curated slice of their existence for public consumption. This act
          symbolizes offering a fragment of oneself. A notable product of this
          digital era is the selfie, frequently viewed as the pinnacle of
          self-indulgence and vanity. Yet, selfies also serve as powerful tools
          of emancipation, especially in the rise of selfie-feminism, which
          lauds the female perspective. With the intention of translating this
          digital self-presentation to a tangible medium, Digital Sigga chose an
          unlikely canvas—a cake.
        </p>
        <p>
          By leveraging a plaster imprint of her face, she crafted a silicon
          mold for baking. Collaborating with a local bakery, she overlaid the
          cake with a digitally printed marzipan rendition of her own selfie,
          one that had been processed using a face filter on Instagram. The
          deliberate juxtaposition of a two-dimensional image atop a
          three-dimensional form aimed to emulate the aesthetic glitches often
          seen in 3D scanning and other digital processes.
        </p>
      </span>
    ),
    credits: undefined,
  },
  {
    name: "Paperdoll",
    year: 2018,
    images: [
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725991117/PastWork/paperdoll/Balenciaga_1_rdz9vo.jpg",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725991120/PastWork/paperdoll/Balenciaga_4_sd80x5.jpg",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725991117/PastWork/paperdoll/Balenciaga_1_rdz9vo.jpg",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725991114/PastWork/paperdoll/Prada_4_ck4ugp.jpg",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725991111/PastWork/paperdoll/vetements_2_cxedye.jpg",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725991108/PastWork/paperdoll/Prada_1_lwdxkf.jpg",
    ],
    description: (
      <span>
        <h3>Digital Paper Doll</h3>
        <p>
          At the inception of the Digital Sigga journey, there was an intrigue
          surrounding the art of refining images for online display. This
          curiosity was about ensuring images look flawless but also maintaining
          an illusion of authenticity. With the proliferation of mobile photo
          editing apps, which are more user-friendly than tools like Photoshop,
          it's become easy for anyone to tweak their images before showcasing
          them online.
        </p>
        <p>
          For a preliminary exploration, Digital Sigga experimented with
          personal photos. This involved standard alterations provided by mobile
          editors such as eye enlargement and skin smoothing. An aspiration to
          superimpose high-end clothing, like an Acne Studio shirt, onto the
          image was also pursued. However, this attempt clashed with the
          presence of a coat already in the image. The final product resembled a
          paper collage, giving the figure a doll-like appearance.
        </p>
        <p>
          This intriguing result paved the way for the first major project under
          the Digital Sigga name. An online avatar was conceived, reminiscent of
          traditional paper dolls—two-dimensional figures complemented by
          paper-made outfits. A photograph was taken in minimal clothing, posing
          in a way that would easily facilitate the addition of digital outfits.
          Unlike the traditional paper doll meant for physical play, this
          version was explicitly digital.
        </p>
        <p>
          Harnessing the power of the internet, Digital Sigga scoured designers'
          websites to curate outfits. These clothing images were then
          superimposed onto the digital paper doll. This process allowed for a
          constantly evolving wardrobe without any real-world purchases. The
          resulting outfits were then showcased on an Instagram account.
        </p>
        <p>
          Dubbed the "Digital Paper Doll," this avatar, though derived from a
          photograph of its creator, stands as a distinct entity. Images of the
          doll, always in a consistent stance and facial expression, highlight
          varying fashion statements. The distinction between images of the doll
          and its real-life counterpart lies not in appearance but in the doll's
          dynamic fashion presentation.
        </p>
        <p>
          This project aimed to probe the online notions of authenticity and
          highlight the ironic reliance on tangible, mass-produced items to
          convey individualism in the digital realm. It's important to remember
          that platforms like Instagram allow users to share visual narratives.
          However, these digital images are merely two-dimensional glimpses into
          reality—carefully curated facades that often omit the broader picture.
          The Digital Sigga project underscores that in the digital age,
          material possessions might not be essential to curate these visual
          stories.
        </p>
      </span>
    ),
    credits: undefined,
  },

  // Add other projects similarly
];

const PastWork: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number[]>(
    projects.map(() => 0)
  );

  // Create refs for each project
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleImageChange = (
    projectIndex: number,
    direction: "next" | "prev"
  ) => {
    const activeProject = projects[projectIndex];
    const newIndex =
      direction === "next"
        ? (currentImageIndex[projectIndex] + 1) % activeProject.images.length
        : (currentImageIndex[projectIndex] - 1 + activeProject.images.length) %
          activeProject.images.length;
    setCurrentImageIndex((prevIndexes) => {
      const newIndexes = [...prevIndexes];
      newIndexes[projectIndex] = newIndex;
      return newIndexes;
    });
  };

  const scrollToProject = (index: number) => {
    const projectElement = projectRefs.current[index];
    if (projectElement) {
      projectElement.scrollIntoView({ behavior: "smooth" });
    }
    setShowMenu(false);
  };

  return (
    <div className="container">
      {/* Dropdown Menu */}
      <div className="dropdown-menu">
        <button
          className="dropdown-button"
          onClick={() => setShowMenu(!showMenu)}
        >
          Select a Project
        </button>
        {showMenu && (
          <div className="dropdown-content">
            {projects.map((project, index) => (
              <button key={project.name} onClick={() => scrollToProject(index)}>
                {project.name}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Project Cards */}
      {projects.map((project, index) => (
        <div
          key={project.name}
          className="project-card"
          ref={(el) => (projectRefs.current[index] = el)} // Assign each project card its ref
        >
          <div className="project-text">
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <p>{project.credits}</p>
          </div>
          <div className="project-images">
            <button
              className="image-nav prev"
              onClick={() => handleImageChange(index, "prev")}
            >
              ‹
            </button>
            {project.images.length > 0 && (
              <img
                src={project.images[currentImageIndex[index]]}
                alt={`${project.name} image`}
              />
            )}
            <button
              className="image-nav next"
              onClick={() => handleImageChange(index, "next")}
            >
              ›
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PastWork;
