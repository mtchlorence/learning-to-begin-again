const topics = [
  { no: "01", title: "Focused + Diffuse Thinking", href: "#modes", color: "olive" },
  { no: "02", title: "Illusions of Learning", href: "#illusions", color: "terra" },
  { no: "03", title: "Procrastination", href: "#procrastination", color: "olive" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top">Learning to Begin Again</a>
        <nav aria-label="Main navigation">
          <a href="#cover">Cover sheet</a><a href="#story">My story</a><a href="#notes">Study notes</a><a href="#toolkit">Toolkit</a><a href="#references">References</a>
        </nav>
      </header>

      <section className="hero paper" id="top">
        <div className="hero-copy">
          <p className="eyebrow">A Learning How to Learn Field Guide</p>
          <h1>Learning to<br />Begin Again</h1>
          <p className="dek">A practical and personal guide to focused and diffuse thinking, overcoming illusions of learning, and defeating procrastination—one honest study session at a time.</p>
          <a className="button" href="#story">Start with the story <span aria-hidden="true">→</span></a>
        </div>
        <div className="collage" aria-hidden="true">
          <div className="grid-paper" />
          <div className="olive-disc" />
          <div className="ring" />
          <div className="lined-sheet" />
          <div className="sticky-note"><span className="tape" />The goal isn’t to<br />study more.<br /><strong>It’s to study well,</strong><br />then rest well.</div>
          <div className="scribble">Begin again.<br />Keep learning.</div>
        </div>
        <div className="topic-strip">
          {topics.map((topic) => <a key={topic.no} href={topic.href} className={`topic-pill ${topic.color}`}><span>{topic.no}</span>{topic.title}</a>)}
        </div>
      </section>

      <section className="cover section" id="cover">
        <div className="section-label">Optional cover sheet</div>
        <div className="cover-grid">
          <div><p className="kicker">Project overview</p><h2>A field guide made from a season of starting over.</h2></div>
          <div className="cover-copy">
            <p>This mini-blog translates ideas from <em>Learning How to Learn</em> into a practical system for independent learners. I will use it as a study guide while rebuilding my technical career, and I hope it helps anyone who feels overwhelmed by having to begin again.</p>
            <p><strong>Primary course topics:</strong> focused and diffuse modes of thinking; illusions of learning; and procrastination. It also applies memory, retrieval practice, chunking, testing, deliberate practice, mindset, sleep, and lifelong learning.</p>
            <p><strong>Research note:</strong> Assertions about learning are supported by consistently formatted references at the end. All decorative visuals are original CSS artwork created for this project.</p>
          </div>
        </div>
      </section>

      <section className="story section ruled" id="story">
        <div className="story-title"><p className="kicker">Personal essay</p><h2>When learning stopped feeling like possibility</h2><p className="byline">By Mitch Dela Piza · August 2026</p></div>
        <article className="prose dropcap">
          <p>I used to think learning followed a straight line: earn a computer science degree, gain experience, and steadily move forward. Then I experienced my first layoff. As the eldest in my family, losing my job was not simply a career interruption; it made every gap in my knowledge feel urgent. Job postings stopped looking like opportunities and began to look like lists of everything I lacked.</p>
          <p>I responded by trying to learn everything—Cloud, DevOps, Data Engineering—often all at once. I could spend hours watching tutorials and highlighting notes, yet struggle to explain the lesson without looking. The activity felt productive, but familiarity was disguising itself as mastery.</p>
          <blockquote>Beginning again does not mean returning to zero. I carry forward every skill, failure, connection, and lesson that brought me here.</blockquote>
          <p>This course changed the question from “How many hours did I study?” to “What can I retrieve, connect, and use?” I am learning to alternate intense focus with genuine rest, test myself before I feel ready, and approach avoidance with compassion instead of shame. Learning is no longer a performance of certainty. It is the patient practice of becoming capable.</p>
        </article>
      </section>

      <section className="notes section" id="notes">
        <div className="notes-heading"><p className="kicker">Three notes from the journey</p><h2>How the brain learns—and how I am changing my practice</h2><p>Each note moves from a course idea to a concrete experiment. Together they form a repeatable learning cycle.</p></div>

        <article className="chapter" id="modes">
          <div className="chapter-meta"><span>NOTE 01</span><span>ATTENTION + REST</span></div>
          <div className="chapter-body">
            <h3>Focus deeply. Then step away on purpose.</h3>
            <p className="lead">Focused thinking directs attention along familiar neural pathways; diffuse thinking relaxes attention so ideas can connect more broadly. Learning needs both—not constant concentration.</p>
            <div className="two-col"><div><h4>What this means</h4><p>When I am learning a new AWS service or debugging a pipeline, focused mode helps me trace details. But when I remain stuck and keep forcing the same approach, I can become trapped in an unhelpful pattern. A walk, shower, meal, or good night’s sleep is not wasted time; it creates space for a different connection to surface. Research on incubation suggests that breaks can support creative problem solving, though “diffuse mode” is best understood here as a useful course model rather than a literal on/off brain switch.<sup><a href="#ref-1">1</a></sup></p></div>
              <aside className="note-card"><span>TRY THIS</span><strong>The focus–release loop</strong><ol><li>Define one small problem.</li><li>Work without interruption for 25 minutes.</li><li>Mark exactly where you became stuck.</li><li>Take a real 5–10 minute break.</li><li>Return and write the first new connection.</li></ol></aside></div>
            <p className="application"><strong>My application:</strong> I will study one pipeline component at a time, sketch its inputs and outputs from memory, then step away before reviewing the gaps. Rest becomes part of the plan—not a reward I must earn.</p>
          </div>
        </article>

        <article className="chapter" id="illusions">
          <div className="chapter-meta"><span>NOTE 02</span><span>MEMORY + TESTING</span></div>
          <div className="chapter-body">
            <h3>Recognition is comforting. Retrieval is revealing.</h3>
            <p className="lead">Rereading a page can make it feel familiar, but familiarity does not prove that knowledge can be recalled or applied. This is an illusion of competence.</p>
            <div className="two-col"><div><h4>What this means</h4><p>The honest test is to close the material and produce an explanation, diagram, command, or solution. Retrieval practice strengthens long-term learning more effectively than repeated studying in many settings, while distributed practice revisits material across time.<sup><a href="#ref-2">2</a></sup><sup><a href="#ref-3">3</a></sup> Mistakes are not verdicts; they are precise directions for the next study session.</p><p>Chunking also changes what I can hold in mind. A “CI/CD pipeline” becomes a meaningful chunk only after I understand and practice its parts—source, build, test, artifact, deploy, and observe. A label without those connections is not yet a usable chunk.</p></div>
              <aside className="note-card terra-card"><span>TRY THIS</span><strong>The blank-page check</strong><ol><li>Close every tab and note.</li><li>Write what you know from memory.</li><li>Explain it as if teaching a beginner.</li><li>Check the source in another color.</li><li>Schedule the gaps for later retrieval.</li></ol></aside></div>
            <p className="application"><strong>My application:</strong> After a Terraform lesson, I will build a small resource without copying the tutorial, explain the state file aloud, and turn every error into a question for spaced review.</p>
          </div>
        </article>

        <article className="chapter" id="procrastination">
          <div className="chapter-meta"><span>NOTE 03</span><span>EMOTION + PROCESS</span></div>
          <div className="chapter-body">
            <h3>Make starting smaller than the fear.</h3>
            <p className="lead">Procrastination is often less about laziness than escaping the unpleasant emotion attached to a task. Avoidance repairs mood now while transferring the cost to our future self.<sup><a href="#ref-4">4</a></sup></p>
            <div className="two-col"><div><h4>What this means</h4><p>A vague instruction like “study Kubernetes” can carry fear, uncertainty, and the possibility of failure. I can lower the emotional barrier by defining the next physical action: open the lab, create one pod, or read one error message. The Pomodoro technique helps because it asks for commitment to a short process, not completion of an intimidating outcome.</p><p>The cue–routine–reward loop also matters. I can use a consistent desk, time, and opening ritual as a cue; one protected focus interval as the routine; and a walk, tea, or visible check mark as a small reward.</p></div>
              <aside className="note-card"><span>TRY THIS</span><strong>The five-minute doorway</strong><ol><li>Name the feeling without judgment.</li><li>Shrink the task to one visible action.</li><li>Remove one distraction.</li><li>Work for only five minutes.</li><li>Continue if momentum comes; stop kindly if it does not.</li></ol></aside></div>
            <p className="application"><strong>My application:</strong> On difficult days, success is opening the terminal and completing one tiny lab. Consistency is built by returning, not by waiting to feel fearless.</p>
          </div>
        </article>
      </section>

      <section className="toolkit section ruled" id="toolkit">
        <div className="toolkit-intro"><p className="kicker">A reusable learning system</p><h2>The BEGIN loop</h2><p>A six-step cycle I can use for a technical lesson, an interview topic, or any unfamiliar skill.</p></div>
        <div className="steps">
          <div><b>B</b><h3>Bound the task</h3><p>Choose one achievable target.</p></div>
          <div><b>E</b><h3>Engage deeply</h3><p>Focus for one protected interval.</p></div>
          <div><b>G</b><h3>Go diffuse</h3><p>Step away and let ideas settle.</p></div>
          <div><b>I</b><h3>Inspect memory</h3><p>Retrieve before reopening notes.</p></div>
          <div><b>N</b><h3>Notice gaps</h3><p>Correct errors and schedule a return.</p></div>
        </div>
        <details><summary>Use the five-question session review</summary><ol><li>What was the one thing I intended to learn?</li><li>What can I explain without looking?</li><li>Where did I hesitate or make an error?</li><li>What connection appeared after a break?</li><li>When will I retrieve this again?</li></ol></details>
      </section>

      <section className="closing section">
        <p className="kicker">A note to the learner who feels behind</p>
        <h2>You are not starting from nothing.</h2>
        <p>Learning is not proof that you were inadequate before. It is evidence that you are still willing to grow. Begin with one question. Work honestly. Rest without guilt. Test what remains. Then begin again.</p>
        <a className="text-link" href="#top">Return to the beginning ↑</a>
      </section>

      <section className="references section" id="references">
        <p className="kicker">References</p><h2>Research behind the field notes</h2>
        <ol>
          <li id="ref-1">Dijksterhuis, A., &amp; Meurs, T. (2006). Where creativity resides: The generative power of unconscious thought. <em>Consciousness and Cognition, 15</em>(1), 135–146. <a href="https://doi.org/10.1016/j.concog.2005.04.007" target="_blank" rel="noreferrer">doi.org/10.1016/j.concog.2005.04.007 ↗</a></li>
          <li id="ref-2">Karpicke, J. D., &amp; Blunt, J. R. (2011). Retrieval practice produces more learning than elaborative studying with concept mapping. <em>Science, 331</em>(6018), 772–775. <a href="https://pubmed.ncbi.nlm.nih.gov/21252317/" target="_blank" rel="noreferrer">PubMed ↗</a></li>
          <li id="ref-3">Dunlosky, J., Rawson, K. A., Marsh, E. J., Nathan, M. J., &amp; Willingham, D. T. (2013). Improving students’ learning with effective learning techniques. <em>Psychological Science in the Public Interest, 14</em>(1), 4–58. <a href="https://doi.org/10.1177/1529100612453266" target="_blank" rel="noreferrer">doi.org/10.1177/1529100612453266 ↗</a></li>
          <li id="ref-4">Sirois, F. M., &amp; Pychyl, T. A. (2013). Procrastination and the priority of short-term mood regulation. <em>Social and Personality Psychology Compass, 7</em>(2), 115–127. <a href="https://doi.org/10.1111/spc3.12011" target="_blank" rel="noreferrer">doi.org/10.1111/spc3.12011 ↗</a></li>
          <li>Oakley, B., Sejnowski, T., &amp; McConville, A. (Instructors). <em>Learning How to Learn: Powerful mental tools to help you master tough subjects</em>. Coursera.</li>
        </ol>
      </section>

      <footer><span>Learning to Begin Again</span><span>A final project by Mitch Dela Piza · 2026</span><span>Made for lifelong learners</span></footer>
    </main>
  );
}
