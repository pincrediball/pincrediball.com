<script lang="ts">
  import A from '$lib/components/A.svelte';
</script>

<div class="w-[1200px] max-w-full mx-auto px-4 pt-12 pb-16">
  <div class="grid md:grid-cols-[2fr_1fr] grid-cols-1 w-full gap-4 lg:gap-16">
    <div>
      <p class="mb-2 text-sm">Latest post:</p>

      <article id="post-2023-02-22" class="scroll-mt-24 prose prose-invert max-w-none">
        <h2>Day 10: Prototype 003, part 2</h2>
        <h3><strong>Jeroen</strong>, February 22, 2023</h3>
        <p>Well... that was a disaster!</p>
        <p>
          As warned by folks around me, and just as I already sortof knew would happen: <em
            >rolling your own</em
          > (engine) is a bad idea. Generally. And specifically, too (at least for this case).
        </p>
        <p>After a few hours of labor here's where I got:</p>
        <!-- svelte-ignore a11y-media-has-caption -->
        <video controls loop>
          <source src="/img/pincrediball-prototype-003.mp4" type="video/mp4" />
          <p>Video recording of an extremely crude demo pinball machine.</p>
        </video>
        <p>And then the mountain of work became visible.</p>
        <p>
          The smart thing to do? Enjoy a few other fun things in my sabbatical, let the project lie
          down for a bit. I'll likely revitalize my enthusiasm for the project and go back to using
          an existing engine. Possibly within this web app that's now set up.
        </p>
        <p>
          Stay tuned for prototype <em>004</em> soon (?). I'm calling it an early day, on Day 10.
        </p>
      </article>

      <article
        id="post-2023-02-21"
        class="scroll-mt-24 prose prose-invert max-w-none mt-8 pt-8 border-t border-t-amber-400/50"
      >
        <h2>Day 9: Prototype 003, part 1</h2>
        <h3><strong>Jeroen</strong>, February 21, 2023</h3>
        <p>
          After <A href="#post-2023-02-20">yesterday</A> several friends helped out with some rubber
          duck debugging. Got some great input on Slack and in other places about how I could wrangle
          the physics engine collisions into submission. And how much I should probably let go and embrace
          the chaos of a realistic engine.
        </p>
        <p>However, I still changed it up... for prototyping purposes!</p>
        <p>
          Using PhaserJS and MatterJS might <em>still</em> be the right way to go. But I still wanted
          to try out how it feels to create a fully custom engine anyways.
        </p>
        <p>
          And while I was at that, I was also curious to see how far I can get with plain html, css,
          And JavaScript (and no <em>game</em> engine). Using SvelteKit and Tailwind, just for prototyping
          speed at the moment.
        </p>
        <p>
          I didn't get very far yet with writing the actual game loop and time ticker. But I did do
          a bunch of good work on an initial game layout. It's far from polished, but (even though
          polish might be 80% of the work?!) that's for later. Here's the initial results:
        </p>
        <a href="/img/pincrediball-prototype-003-part1a.png" target="_blank">
          <img src="/img/pincrediball-prototype-003-part1a.png" alt="Game in a browser window" />
        </a>
        <p>
          Obviously, this still needs work. But it's getting somewhere. Even if I go the PhaserJS
          route after all, I might be able to use this setup in conjunction with it.
        </p>
        <p>And I'm sorry to say: that's all for today, folks!</p>
        <p>
          As a final footnote for today's devlog: I also decided to open source the prototypes. So
          you can fully see me fumbling about. Writing all sorts of just-make-it-work code. You can
          find <A href="https://github.com/pincrediball"
            >all the repositories in the Pincrediball GitHub organization</A
          >. And for my most loyal readers (hi mum!), here's a quick peek at it, with just a random
          screenshot of me hacking about in prototype number three!
        </p>
        <a href="/img/pincrediball-prototype-003-part1b.png" target="_blank">
          <img
            src="/img/pincrediball-prototype-003-part1b.png"
            alt="VSCode showing prototype-003 files"
          />
        </a>
        <p>Prototype 003 will likely get some more love the coming days. Stay tuned!</p>
      </article>

      <article
        id="post-2023-02-20"
        class="scroll-mt-24 prose prose-invert max-w-none mt-8 pt-8 border-t border-t-amber-400/50"
      >
        <h2>Day 8: Prototype 002</h2>
        <h3><strong>Jeroen</strong>, February 20, 2023</h3>
        <p>
          After not doing too much during the weekend (days 6 & 7), it's now Monday of week 2 and
          high time to get back to the project. After a week of "meta" stuff, designing, and a
          super-light prototype, today was spent on more in-depth prototyping.
        </p>
        <p>
          I'm very happy with what I <em>did</em>, but only moderately so with the <em>result</em>.
          Here, have a look for yourself first:
        </p>
        <div>
          <!-- svelte-ignore a11y-media-has-caption -->
          <video controls loop>
            <source src="/img/pincrediball-prototype-002.mp4" type="video/mp4" />
            <p>Video recording of an extremely crude demo pinball machine.</p>
          </video>
        </div>
        <p><small> (Note that you see the debug boxes and vectors in these prototypes.) </small></p>
        <p>
          Let's summarize what I learned during today's experiments, starting with the positives:
        </p>
        <ul>
          <li>
            <span class="font-bold text-green-500 mr-2">+</span> SvelteKit will be a great "bearer" of
            the game
          </li>
          <li>
            <span class="font-bold text-green-500 mr-2">+</span> Using plain html/css/js for parts of
            the app will likely turn out great
          </li>
          <li>
            <span class="font-bold text-green-500 mr-2">+</span> Tailwind enables for fast menu's and
            other UI
          </li>
          <li>
            <span class="font-bold text-green-500 mr-2">+</span> I got <em>something</em> looking like
            Pinball physics to work
          </li>
        </ul>
        <p>However, I have many concerns after today:</p>
        <ul>
          <li>
            <span class="font-bold text-red-500 mr-2">&ndash;</span> MatterJS physics is wonky
            (balls going <em>through</em> static bounds or getting stuck)
          </li>
          <li>
            <span class="font-bold text-red-500 mr-2">&ndash;</span> Level editing is cumbersome in (vanilla)
            Phaser, without any tools
          </li>
          <li>
            <span class="font-bold text-red-500 mr-2">&ndash;</span> Curved shapes and SVG paths are
            a <em>major</em> pain to use
          </li>
        </ul>
        <p>
          I'm not so sure yet where to go from here. Have I learned that I need to go back to my
          original idea? Building a super-simple physics engine of my own, to make everything far
          more deterministic and reliable? Or should I stick with out-of-the-box physics and just
          deal with the issues?
        </p>
        <p>Perhaps a night's sleep and some distraction will bring clarity.</p>
      </article>

      <article
        id="post-2023-02-17"
        class="scroll-mt-24 prose prose-invert max-w-none mt-8 pt-8 border-t border-t-amber-400/50"
      >
        <h2>Day 5: Prototype 001</h2>
        <h3><strong>Jeroen</strong>, February 17, 2023</h3>
        <p>
          Today was not a very productive day, mostly because I didn't spend too much time on the
          project. Still, got to a very first prototype with a plunger and a ball, plus some
          physics:
        </p>
        <div>
          <!-- svelte-ignore a11y-media-has-caption -->
          <video controls loop>
            <source
              src="/img/pincrediball-prototype-001.webm"
              type="video/webm; codecs=vp9,vorbis"
            />
            <source src="/img/pincrediball-prototype-001.mp4" type="video/mp4" />
            <p>Video recording of an extremely crude demo pinball machine.</p>
          </video>
        </div>
        <p>
          It seems the choice for PhaserJS with the MatterJS physics engine is "good enough" for my
          goals. And I think I will just leave it to chance that I chose right, instead of heavily
          investigating other Game Engines.
        </p>
        <p>
          That's it for day 5. Weekend's up next, we'll see if I continue work, or whether the next
          update will come on Monday...
        </p>
      </article>

      <article
        id="post-2023-02-16"
        class="scroll-mt-24 prose prose-invert max-w-none mt-8 pt-8 border-t border-t-amber-400/50"
      >
        <h2>Day 4: Engine's on!</h2>
        <h3><strong>Jeroen</strong>, February 16, 2023</h3>
        <p>
          Today it's time to figure out an engine to use. I'm leaning heavily towards <A
            href="https://phaser.io/">PhaserJS</A
          > (the main alternatives being Godot and Unity), because it allows me to tap into my existing
          web development and JavaScript skills.
        </p>
        <p>
          I'm mostly doing tutorials and reading documentation, so no exciting updates from today
          for the devlog. That does give me a minute to share my rough "plan" I created earlier in
          the project. Here it is:
        </p>
        <a href="/img/v2023-02-14a-tipm-brainstorm.png" target="_blank">
          <img
            src="/img/v2023-02-14a-tipm-brainstorm.png"
            alt="Brainstorm overview divided in 6 sections: Design, Graphics/Art, Sound/Music, Game Loop/Engine, Polish, Publish"
          />
        </a>
        <p>
          It started as a brainstorm, but it became a rough "plan". Each of the six parts is roughly
          a timebox of one week. I'm starting with "Design" this week, but currently borrowing a bit
          from the next goal: "Game Loop / Engine".
        </p>
        <p>
          Stuff's color coded too: the red stuff is Must-Haves, yellow Should-Haves, and green the
          Nice-to-Haves.
        </p>
        <p>
          What do you think? Too optimistic? Probably. But let's see how far we'll get, shall we?!
        </p>
      </article>

      <p class="mb-4 text-sm">Older posts:</p>

      <article
        id="post-2023-02-15"
        class="scroll-mt-24 prose prose-invert max-w-none mt-8 pt-8 border-t border-t-amber-400/50"
      >
        <h2>Day 3: Website first?</h2>
        <h3><strong>Jeroen</strong>, February 15, 2023</h3>
        <p>
          Continuing from day 2 with a focus on <em>fun</em> activities, I decided to finish up the
          website. This time I don't think I can claim anymore that it's in the end somehow part of
          the <em>critical path</em> though?
        </p>
        <p>
          But regardless of whether it was <em>The Right Thing</em> to do right now, it <em>was</em>
          very effective! I mean: you're looking at the very result right now.
        </p>
        <p>
          The website was built with SvelteKit and TailwindCSS, which was rather efficient because I
          recently used it for both of my other recent side-projects: <A
            href="https://tierdom.jeroenheijmans.nl">Tierdom</A
          > and <A href="https://vesta.infi.nl">vesta.infi.nl</A>. But not before I spent the entire
          morning learning some more Figma skills to do the entire design first.
        </p>
        <p>
          I only bought the domain name, used <A
            href="https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages#using-an-apex-domain-for-your-github-pages-site"
            >GitHub pages with a custom and apex domain</A
          > for hosting the whole thing. Which, after the usual DNS hassle, works quite well!
        </p>
        <p>All this means three important things:</p>
        <ul>
          <li>I can <em>comfortably share</em> the plans with the world</li>
          <li>I am <em>on schedule</em> for week 1's plans</li>
          <li>I have <em>no excuses left</em> to procrastinate prototyping</li>
        </ul>
        <p>
          So let's end this third day with some initial social media posts and links to this
          website.
        </p>
        <p><strong>And tomorrow: we prototype!</strong></p>
      </article>

      <article
        id="post-2023-02-14"
        class="scroll-mt-24 prose prose-invert max-w-none mt-8 pt-8 border-t border-t-amber-400/50"
      >
        <h2>Day 2: Now we're getting somewhere!</h2>
        <h3><strong>Jeroen</strong>, February 14, 2023</h3>
        <p>
          Second day I allowed myself to get side-tracked. I decided that the best way to keep
          motivation high was by <em>doing essential things disguised as non-essential things</em>.
          By this I mean I tried to incorporate essential things (work on the designs and game idea)
          into far less essential things (that were enjoyable to do).
        </p>
        <p>
          First thing I did was to <strong>redo the main game screen's design</strong>. For fun I've
          shared that on the (current, at the time of writing)
          <a href="/" class="a-internal">home page</a>. After that I took care of a bunch of other
          non-essential (but fun!) things:
        </p>
        <ul>
          <li>✅ Logo &amp; Banner designed</li>
          <li>✅ YouTube channel claimed</li>
          <li>✅ Itch.io account claimed</li>
          <li>✅ Socials set up</li>
          <li>✅ SteamWorks application submitted (and $100 fee paid...)</li>
        </ul>
        <p>
          It was a <em>fun</em> day with this too, as you can tell from <A
            href="https://mastodon.social/@jeroenheijmans/109865321998439644">my related toot</A
          >. And it really gave me a bunch of inspiration and energy to continue on!
        </p>
      </article>

      <article
        id="post-2023-02-13"
        class="scroll-mt-24 prose prose-invert max-w-none mt-8 pt-8 border-t border-t-amber-400/50"
      >
        <h2>Day 1: Gotta start somewhere!</h2>
        <h3><strong>Jeroen</strong>, February 13, 2023</h3>
        <p>
          First day of the week I decided to start the project. However, the night before we watched
          the Super Bowl... in the GMT+1 timezone! So was up until 04:30 (that's AM for y'all),
          naturally this wasn't the most productive day.
        </p>
        <p>
          But the most important thing got done: I got <em>started</em> on the project! Plus several
          important things got done nonetheless, as <A
            href="https://mastodon.social/@jeroenheijmans/109859902264743330">I wrote on Mastodon</A
          >:
        </p>
        <ul>
          <li>✅ Brainstorm done</li>
          <li>✅ Rough plan created</li>
          <li>✅ Name chosen</li>
          <li>✅ Domain bought!</li>
          <li>✅ GitHub org and repo's claimed</li>
          <li>✅ Social media names claimed</li>
          <li>✅ Game loop basics designed</li>
          <li>✅ Initial designs</li>
        </ul>
        <p>In the end would call day 1 a success!</p>
      </article>
    </div>

    <div>
      <div
        class="rounded bg-gradient-to-r from-zinc-50 to-zinc-200 text-zinc-900 shadow-firm sticky top-24"
      >
        <!-- prettier-ignore -->
        <div class="p-4 flex flex-col gap-2">
          <h2 class="text-xl font-bold">Links to all posts:</h2>
          <a class="underline hover:text-amber-500" href="#post-2023-02-22">Day 10: Prototype 003, part 2</a>
          <a class="underline hover:text-amber-500" href="#post-2023-02-21">Day 9: Prototype 003, part 1</a>
          <a class="underline hover:text-amber-500" href="#post-2023-02-20">Day 8: Prototype 002</a>
          <a class="underline hover:text-amber-500" href="#post-2023-02-17">Day 5: Prototype 001</a>
          <a class="underline hover:text-amber-500" href="#post-2023-02-16">Day 4: Engine's on!</a>
          <a class="underline hover:text-amber-500" href="#post-2023-02-15">Day 3: Website first?</a>
          <a class="underline hover:text-amber-500" href="#post-2023-02-14">Day 2: Now we're getting somewhere!</a>
          <a class="underline hover:text-amber-500" href="#post-2023-02-13">Day 1: Gotta start somewhere!</a>
        </div>
      </div>
    </div>
  </div>
</div>

<style lang="postcss">
  .prose h2 + h3 {
    @apply -mt-2 pb-2 text-lg border-b border-slate-50/10;
  }
  .prose h2 + h3 strong {
    @apply text-amber-500;
  }
  .prose img {
    @apply border-2 border-black hover:border-amber-600 mt-4;
  }
  .prose video {
    @apply border-2 border-black/50 w-full lg:min-h-[400px];
  }
</style>
