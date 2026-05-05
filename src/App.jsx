import { useState } from "react";

const HEADSHOT = "/headshot.jpg";

const GALLERY = [
  { src: "/gallery1.jpg", caption: "BOLDforce — Dreaming in Action 2024", context: "AI Lunch N Learn · Co-Founder & Executive Sponsor" },
  { src: "/gallery2.jpg", caption: "BOLDforce — Dreaming in Action 2024", context: "Co-Founder & Executive Sponsor · Salesforce Toronto" },
  { src: "/gallery3.jpg", caption: "Salesforce Connections — Theater 3", context: "Featured Speaker · ABM in Healthcare & Life Sciences" },
  { src: "/gallery4.jpg", caption: "BLK Owned — Trailblazer Programme", context: "Board Secretary & Strategy Lead" },
  { src: "/gallery5.jpg", caption: "BLK Owned — Community Event", context: "Board Secretary & Strategy Lead" },
  { src: "/gallery6.jpg", caption: "Red Bulls Stadium — Customer Visit", context: "Strategic Enterprise · New York" },
  { src: "/gallery7.jpg", caption: "Dreamforce — Marketing Cloud", context: "Featured Speaker · San Francisco" },
  { src: "/gallery8.jpg", caption: "BOLDforce Canada — Team", context: "Co-Founder & Executive Sponsor · Salesforce" },
  { src: "/gallery9.jpg", caption: "OBSIDI by BPTN Awards", context: "Presenting · BMO Sponsored · Toronto" },
];

const STATS = [
  { value: "12", label: "Years at Salesforce" },
  { value: "139%", label: "Career Attainment Avg" },
  { value: "50%+", label: "of Canada Reached" },
  { value: "80x", label: "ROI — Home Depot" },
  { value: "500+", label: "ERG Members Built" },
];

const TABS = ["Overview", "Experience", "Case Studies", "Leadership", "Gallery"];

const ROLES = [
  {
    title: "Director, Enterprise Sales",
    company: "Salesforce Canada",
    period: "FY26 – FY27",
    tag: "US Retail & Consumer Goods",
    intro: "Built and led a 10-person enterprise AE team across six North American offices, owning Marketing Cloud, Commerce Cloud, and Data Cloud for enterprise and strategic accounts.",
    bullets: [
      "Key accounts: Walmart, MARS, L'Oréal, Nike, PepsiCo, Coca-Cola, Walgreens, Kroger — team closed 30%+ of total vertical revenue for the enterprise field organization.",
      "Drove multi-threaded executive engagement across CMO, CTO, and CDO stakeholders; navigated complex procurement cycles with multi-year expansion strategies.",
      "Recognised in Salesforce global onboarding materials as a model for enterprise digital sales leadership.",
    ],
  },
  {
    title: "Strategic Enterprise Account Executive",
    company: "Salesforce Canada",
    period: "FY23 – FY25",
    tag: "Canada's Largest Retailers & Financial Institutions",
    intro: "Covered Canada's most complex enterprise accounts on marketing technology, customer data platforms, and omnichannel experience. 144% quota attainment. Peak Performers Club FY23.",
    bullets: [
      "Loblaw Companies: Architected Marketing Cloud strategy across 20+ lines of business — PC Optimum, PC Financial, Shoppers Drug Mart, Joe Fresh — reaching 50%+ of the Canadian population.",
      "PC Financial / PC Bank: Embedded with regulated financial product teams on contact centre data strategy — direct credibility in matrixed financial services environments.",
      "Walmart Canada: Led national digital communications deployment; championed WhatsApp expansion; formal member of Walmart Global team at Bentonville HQ. +90% push lift, +40% CTR.",
      "Home Depot Canada: Won 12-month competitive RFP for Personalization + Intelligence platform. 80x ROI, 7-month payback, $115.9M projected annual impact.",
      "Beer Store: Net-new full digital portfolio close in 7 weeks, displacing MailChimp and HubSpot.",
    ],
  },
  {
    title: "Commercial & Enterprise Account Executive",
    company: "Salesforce Canada",
    period: "FY20 – FY22",
    tag: "Mid-Market to Enterprise",
    intro: "Managed a diverse portfolio across Healthcare, Technology, and Retail & Consumer Goods in Canada. 107% attainment.",
    bullets: [
      "Harnois Énergies: Marketing Cloud deployment — 40% customer purchase rate, 66% of conversions in first 30 days.",
      "Featured in Salesforce's global Digital AE onboarding materials and the Salesforce corporate book.",
    ],
  },
  {
    title: "SMB Account Executive",
    company: "Salesforce Canada",
    period: "FY16 – FY19",
    tag: "Healthcare & Life Sciences",
    intro: "#1 Pardot Account Executive globally (FY19). Authored ABM go-to-market strategy for HLS — top-rated session at Dreamforce and Connections 2019.",
    bullets: [
      "League (HLS): Full platform deployment displacing HubSpot — 10x new customer signings, 63% MAU, employer NPS 7x industry average. Published Salesforce case study.",
      "HLS portfolio: Marketing Cloud and Pardot deployments displacing Marketo and Silverpop across Medical Guardian, PatientsLikeMe, and GetWellNetwork.",
    ],
  },
];

const CASES = [
  {
    tag: "Retail Banking & Loyalty",
    company: "Loblaw Companies — PC Optimum, PC Financial, Shoppers Drug Mart",
    challenge: "Canada's largest grocery and pharmacy group needed a unified digital marketing platform spanning 20+ distinct lines of business — including PC Financial — reaching over 18 million loyalty members.",
    approach: "Architected a Marketing Cloud strategy unifying data across PC Optimum, PC Financial, Shoppers Drug Mart, Joe Fresh, and No Frills. Built a phased deployment roadmap aligned to each LOB's compliance and channel requirements.",
    outcome: "+33% AOV across programmes. Platform reaches 50%+ of the Canadian population. PC Financial data strategy established direct credibility in regulated financial services.",
  },
  {
    tag: "Financial Services Data Strategy",
    company: "PC Financial / PC Bank",
    challenge: "PC Bank, a regulated financial product embedded within Loblaw, required a contact centre data platform meeting financial services compliance requirements while enabling personalised engagement at scale.",
    approach: "Worked directly with PC Financial's product and IT teams to evaluate Data Cloud (CDP) for contact centre use cases, navigating both Loblaw enterprise technology governance and PC Bank's financial regulatory framework.",
    outcome: "Established strategic presence in a regulated financial services environment — the most direct bridge from retail martech into a wealth management and banking context.",
  },
  {
    tag: "Enterprise Omnichannel Deployment",
    company: "Walmart Canada",
    challenge: "Walmart Canada sought to unify their digital communications programme across email, push, SMS, and emerging channels while supporting global standardisation and Canadian market requirements.",
    approach: "Led a full Marketing Cloud deployment for national digital communications. Championed WhatsApp expansion for international audiences. Became a formal member of the Walmart Global team at Bentonville HQ.",
    outcome: "+90% push notification engagement lift, +40% CTR, +11% AOV. First WhatsApp deployment in Canada.",
  },
  {
    tag: "AI-Driven Personalization & ROI",
    company: "Home Depot Canada",
    challenge: "Home Depot Canada required a personalization and intelligence platform competing with enterprise retail leaders. A 12-month competitive RFP evaluated three platforms across capability, integration complexity, and ROI.",
    approach: "Led the full RFP response and executive engagement across digital, IT, and marketing stakeholders. Designed a phased Personalization + Intelligence deployment roadmap tied to measurable business outcomes.",
    outcome: "80x ROI post-implementation. 7-month payback period. $115.9M projected annual impact.",
  },
  {
    tag: "Digital Transformation — DTC Commerce",
    company: "Roots Canada",
    challenge: "Roots needed to replatform their DTC e-commerce experience and build a personalised digital marketing capability to grow online revenue and retention.",
    approach: "Led a multi-cloud deployment spanning Marketing Cloud, Commerce Cloud, and AI — aligning digital, IT, and brand leadership across a complex, multi-stakeholder organisation.",
    outcome: "26.2% of total sales driven through personalized recommendations. 7x ROI. 6x SEO efficiency improvement.",
  },
  {
    tag: "Healthcare & Life Sciences",
    company: "League",
    challenge: "League's employer and member marketing ran on HubSpot — a platform that couldn't scale with their enterprise growth or deliver member lifecycle intelligence.",
    approach: "Led full-platform deployment of Marketing Cloud, Pardot, and Service Cloud — displacing HubSpot entirely. Mapped deployment to League's employer, member, and lifecycle marketing strategy.",
    outcome: "10x increase in new customer signings. 63% MAU. 150% engagement lift. Employer NPS 7x the industry average. Published Salesforce case study.",
  },
  {
    tag: "Net-New Logo — Speed to Value",
    company: "Beer Store",
    challenge: "The Beer Store needed to modernise their marketing stack — displacing MailChimp and HubSpot — and launch their new website, app, and personalised email programme on a compressed timeline.",
    approach: "Structured a full digital portfolio close in 7 weeks, navigating a simple but fast procurement cycle and sequencing deployment to hit launch timelines.",
    outcome: "Net-new logo in 7 weeks. Full digital portfolio deployed at launch — website, app, and personalised email programme.",
  },
];

const LEADERSHIP = [
  {
    org: "BOLDforce Canada",
    role: "Co-Founder & Executive Sponsor",
    desc: "Built Salesforce's national Black employee resource group from zero to 500+ members across Canada. Secured a $300K partnership with Black Professionals in Tech Network (BPTN). Contributed to Salesforce's Global Racial Justice Task Force in partnership with the Chief People Officer. Generated 50+ referrals and 15 hires through a structured Insiders Programme with a 99%+ acceptance rate.",
    wide: false,
  },
  {
    org: "BLK Owned",
    role: "Board Secretary & Strategy Lead",
    desc: "Redesigned the Trailblazer Programme into a 6-month multi-pillar curriculum. Secured Salesforce as anchor sponsor (~$260K CAD in-kind over 4 years). Launched inaugural cohort of 17 entrepreneurs — roadmap to 60+ participants by 2030, supporting 160+ Black-owned businesses.",
    wide: false,
  },
  {
    org: "Speaking & Recognition",
    role: "Dreamforce · Connections · World Tour",
    desc: "B2B Marketing Main Stage Keynote at Dreamforce (featured customer: New England Biolabs). Solo speaker at Salesforce Connections 2019 — \"Salesforce for ABM in the HLS Industry.\" Multiple World Tour appearances. Accelerate Leadership Programme — Top 1% globally. L1A Executive Transfer Visa — United States.",
    wide: true,
  },
];

const CREDS = ["139% Career Attainment Avg (FY15–FY23)","9× Quota Achievers Club","3× Peak Performers Club","Accelerate Leadership Programme — Top 1% Globally","#1 Global Pardot AE","L1A Executive Transfer Visa — United States","Co-Founder BOLDforce Canada (500+ Members)","Board Secretary — BLK Owned"];


const css = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  :root{--navy:#0D1B2A;--navy2:#132233;--gold:#C9A84C;--gold-line:rgba(201,168,76,0.35);--cream:#F0EAD6;--muted:#8A94A6;--border:rgba(255,255,255,0.07);--serif:'Cormorant Garamond',Georgia,serif;--sans:'DM Sans',system-ui,sans-serif;--mono:'DM Mono',monospace;}
  body{background:var(--navy);color:var(--cream);font-family:var(--sans);}
  .cr{min-height:100vh;}
  .cr-inner{max-width:1100px;margin:0 auto;padding:0 28px;position:relative;z-index:1;}
  .cr-hero{padding:64px 0 52px;display:grid;grid-template-columns:160px 1fr;gap:40px;align-items:start;border-bottom:1px solid var(--border);position:relative;}
  .cr-hero::after{content:'';position:absolute;bottom:-1px;left:0;width:220px;height:2px;background:linear-gradient(90deg,var(--gold),transparent);}
  .cr-photo{width:140px;height:180px;border-radius:4px;object-fit:cover;border:1px solid var(--gold-line);filter:grayscale(18%) contrast(1.05);box-shadow:0 8px 32px rgba(0,0,0,0.45);}
  .cr-identity{padding-top:4px;}
  .cr-eyebrow{font-family:var(--mono);font-size:10px;letter-spacing:.18em;color:var(--gold);text-transform:uppercase;margin-bottom:10px;}
  .cr-name{font-family:var(--serif);font-size:clamp(38px,5vw,58px);font-weight:600;line-height:1.0;color:var(--cream);letter-spacing:-.01em;margin-bottom:10px;}
  .cr-title{font-size:14px;font-weight:400;color:var(--muted);line-height:1.5;margin-bottom:18px;max-width:540px;}
  .cr-title strong{color:var(--cream);font-weight:500;}
  .cr-contact{display:flex;gap:18px;flex-wrap:wrap;font-family:var(--mono);font-size:11px;color:var(--muted);}
  .cr-contact a{color:var(--gold);text-decoration:none;}
  .cr-stats{display:grid;grid-template-columns:repeat(5,1fr);border:1px solid var(--border);border-radius:6px;overflow:hidden;margin:28px 0 0;}
  .cr-stat{padding:16px 12px;text-align:center;border-right:1px solid var(--border);background:var(--navy2);}
  .cr-stat:last-child{border-right:none;}
  .cr-stat-val{font-family:var(--serif);font-size:24px;font-weight:600;color:var(--gold);line-height:1;}
  .cr-stat-lbl{font-size:10px;color:var(--muted);margin-top:4px;letter-spacing:.05em;}
  .cr-tabs-wrap{position:sticky;top:0;z-index:40;background:var(--navy);border-bottom:1px solid var(--border);}
  .cr-tabs{display:flex;overflow-x:auto;scrollbar-width:none;max-width:1100px;margin:0 auto;padding:0 28px;}
  .cr-tabs::-webkit-scrollbar{display:none;}
  .cr-tab{padding:16px 20px;font-size:12px;font-weight:500;letter-spacing:.06em;text-transform:uppercase;white-space:nowrap;cursor:pointer;border:none;background:transparent;color:var(--muted);border-bottom:2px solid transparent;transition:color .2s,border-color .2s;font-family:var(--sans);}
  .cr-tab:hover{color:var(--cream);}
  .cr-tab.active{color:var(--gold);border-bottom-color:var(--gold);}
  .cr-body{padding:52px 0 80px;}
  .cr-sl{font-family:var(--mono);font-size:10px;letter-spacing:.18em;text-transform:uppercase;color:var(--gold);margin-bottom:10px;}
  .cr-st{font-family:var(--serif);font-size:clamp(26px,3.5vw,38px);font-weight:600;line-height:1.15;color:var(--cream);margin-bottom:12px;}
  .cr-ss{font-size:14px;color:var(--muted);line-height:1.7;max-width:640px;margin-bottom:40px;}
  .cr-div{height:1px;background:var(--border);margin:36px 0;}
  .cr-og{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:36px;}
  .cr-oc{background:var(--navy2);border:1px solid var(--border);border-radius:6px;padding:22px 24px;}
  .cr-oct{font-size:11px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--gold);margin-bottom:10px;}
  .cr-ocb{font-size:13px;color:var(--muted);line-height:1.65;}
  .cr-ocb strong{color:var(--cream);font-weight:500;}
  .cr-cs{display:flex;flex-wrap:wrap;gap:10px;margin-top:36px;}
  .cr-c{padding:7px 14px;border:1px solid var(--border);border-radius:2px;font-size:11px;color:var(--muted);}
  .cr-exp{margin-bottom:40px;padding-bottom:40px;border-bottom:1px solid var(--border);}
  .cr-exp:last-child{border-bottom:none;}
  .cr-etag{display:inline-block;padding:3px 10px;border:1px solid var(--gold-line);border-radius:2px;font-size:10px;letter-spacing:.1em;color:var(--gold);text-transform:uppercase;margin-bottom:12px;}
  .cr-eh{display:flex;justify-content:space-between;align-items:baseline;flex-wrap:wrap;gap:8px;margin-bottom:4px;}
  .cr-et{font-family:var(--serif);font-size:22px;font-weight:600;color:var(--cream);}
  .cr-ep{font-family:var(--mono);font-size:11px;color:var(--muted);}
  .cr-ec{font-size:13px;font-weight:500;color:var(--gold);margin-bottom:10px;}
  .cr-ei{font-size:13px;color:var(--muted);line-height:1.65;margin-bottom:14px;}
  .cr-eb{display:flex;gap:10px;font-size:13px;color:var(--muted);line-height:1.6;margin-bottom:8px;}
  .cr-eb::before{content:"▸";color:var(--gold);flex-shrink:0;margin-top:1px;}
  .cr-eb strong{color:var(--cream);font-weight:500;}
  .cr-case{background:var(--navy2);border:1px solid var(--border);border-radius:6px;padding:28px;margin-bottom:20px;}
  .cr-ctag{font-family:var(--mono);font-size:10px;letter-spacing:.14em;color:var(--gold);text-transform:uppercase;margin-bottom:6px;}
  .cr-cco{font-family:var(--serif);font-size:20px;font-weight:600;color:var(--cream);margin-bottom:18px;}
  .cr-cr{display:grid;grid-template-columns:1fr 1fr 1fr;gap:20px;}
  .cr-cbl{font-size:10px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:var(--gold);margin-bottom:6px;}
  .cr-cbt{font-size:12.5px;color:var(--muted);line-height:1.65;}
  .cr-lead{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-top:8px;}
  .cr-lc{background:var(--navy2);border:1px solid var(--border);border-radius:6px;padding:24px 26px;}
  .cr-lo{font-family:var(--serif);font-size:20px;font-weight:600;color:var(--cream);margin-bottom:4px;}
  .cr-lr{font-size:11px;font-weight:500;letter-spacing:.08em;color:var(--gold);text-transform:uppercase;margin-bottom:14px;}
  .cr-ld{font-size:13px;color:var(--muted);line-height:1.65;}
  .cr-gal{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:8px;} .cr-gimg,.cr-gem{width:100%;aspect-ratio:4/3;object-fit:cover;display:block;}
  .cr-gi{border-radius:4px;overflow:hidden;border:1px solid var(--border);background:var(--navy2);}
  .cr-gimg{width:100%;aspect-ratio:4/3;object-fit:cover;display:block;}
  .cr-gem{width:100%;aspect-ratio:4/3;display:flex;align-items:center;justify-content:center;background:var(--navy2);color:var(--muted);font-size:11px;letter-spacing:.08em;text-transform:uppercase;}
  .cr-gcap{padding:12px 14px;}
  .cr-gct{font-size:12px;font-weight:500;color:var(--cream);margin-bottom:3px;}
  .cr-gcs{font-size:10px;color:var(--muted);letter-spacing:.06em;text-transform:uppercase;}
  .cr-footer{margin-top:60px;padding-top:24px;border-top:1px solid var(--border);font-size:11px;color:var(--muted);display:flex;justify-content:space-between;flex-wrap:wrap;gap:8px;}
  .cr-footer a{color:var(--gold);text-decoration:none;}
  @media(max-width:680px){
    .cr-hero{grid-template-columns:1fr;}
    .cr-stats{grid-template-columns:repeat(3,1fr);}
    .cr-og,.cr-lead{grid-template-columns:1fr;}
    .cr-cr{grid-template-columns:1fr;}
    .cr-gal{grid-template-columns:repeat(2,1fr);}
  }
`;

export default function ChrisRobertsRBC() {
  const [activeTab, setActiveTab] = useState("Overview");
  return (
    <div className="cr">
      <style>{css}</style>
      <div className="cr-inner">
        <div className="cr-hero">
          <img src={HEADSHOT} alt="Chris Roberts" className="cr-photo" />
          <div className="cr-identity">
            <div className="cr-eyebrow">Director · Digital Channels &amp; AI</div>
            <h1 className="cr-name">Chris Roberts</h1>
            <p className="cr-title">Twelve years building <strong>digital marketing platforms</strong> at Canada's largest enterprises — Loblaw, Walmart Canada, Home Depot, PC Financial. <strong>Now bringing that transformation expertise client-side.</strong></p>
            <div className="cr-contact">
              <span>905-580-9430</span><span>·</span>
              <a href="mailto:chris.h.roberts@outlook.com">chris.h.roberts@outlook.com</a><span>·</span>
              <span>Toronto, ON</span><span>·</span>
              <a href="https://linkedin.com/in/chrishroberts" target="_blank" rel="noopener noreferrer">linkedin.com/in/chrishroberts</a>
            </div>
            <div className="cr-stats">
              {STATS.map((s,i)=>(
                <div className="cr-stat" key={i}>
                  <div className="cr-stat-val">{s.value}</div>
                  <div className="cr-stat-lbl">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="cr-tabs-wrap">
        <div className="cr-tabs">
          {TABS.map(t=>(
            <button key={t} className={`cr-tab ${activeTab===t?"active":""}`} onClick={()=>setActiveTab(t)}>{t}</button>
          ))}
        </div>
      </div>
      <div className="cr-inner">
        <div className="cr-body">

          {activeTab==="Overview"&&(
            <section>
              <div className="cr-sl">Professional Profile</div>
              <h2 className="cr-st">Platform depth.<br/>Programme leadership. Client-side.</h2>
              <p className="cr-ss">Twelve years at Salesforce architecting digital marketing technology programmes for Canada's most complex organisations. Every engagement managed at the CMO, CDO, and CTO level, connected to measurable business outcomes. Now bringing that decade of martech depth and cross-functional leadership to the client side.</p>
              <div className="cr-div"/>
              <div className="cr-og">
                <div className="cr-oc"><div className="cr-oct">MarTech &amp; CRM Platforms</div><div className="cr-ocb"><strong>Marketing Cloud</strong> (Email Studio, Journey Builder, Advertising Studio, Mobile Studio) · <strong>Pardot / Account Engagement</strong> · <strong>Data Cloud (CDP)</strong> · CRM Analytics</div></div>
                <div className="cr-oc"><div className="cr-oct">Digital Channels &amp; AI</div><div className="cr-ocb"><strong>Agentforce</strong> · Commerce Cloud · Service Cloud · Experience Cloud · Slack · Omnichannel · Journey Builder</div></div>
                <div className="cr-oc"><div className="cr-oct">Executive Leadership</div><div className="cr-ocb">C-Suite engagement (<strong>CMO · CDO · CTO · CFO</strong>) · Complex stakeholder management · Programme governance · Cross-functional alignment</div></div>
                <div className="cr-oc"><div className="cr-oct">Commercial Growth</div><div className="cr-ocb">Revenue operations · Strategic account expansion · <strong>RFP navigation</strong> · Pipeline discipline · P&amp;L ownership</div></div>
              </div>
              <div className="cr-div"/>
              <div className="cr-sl">Recognition</div>
              <div className="cr-cs">{CREDS.map((c,i)=><div className="cr-c" key={i}>{c}</div>)}</div>
            </section>
          )}

          {activeTab==="Experience"&&(
            <section>
              <div className="cr-sl">Professional Experience</div>
              <h2 className="cr-st">Twelve years.<br/>Canada's most complex accounts.</h2>
              <p className="cr-ss">Every stage deepened the understanding of how enterprises evaluate, adopt, and extract value from digital marketing technology — and what it takes to lead those programmes from the inside.</p>
              <div className="cr-div"/>
              {ROLES.map((r,i)=>(
                <div className="cr-exp" key={i}>
                  <div className="cr-etag">{r.tag}</div>
                  <div className="cr-eh"><div className="cr-et">{r.title}</div><div className="cr-ep">{r.period}</div></div>
                  <div className="cr-ec">{r.company}</div>
                  <div className="cr-ei">{r.intro}</div>
                  {r.bullets.map((b,j)=>{
                    const ci=b.indexOf(":");
                    return ci>0&&ci<35
                      ?<div className="cr-eb" key={j}><span><strong>{b.slice(0,ci)}:</strong>{b.slice(ci+1)}</span></div>
                      :<div className="cr-eb" key={j}><span>{b}</span></div>;
                  })}
                </div>
              ))}
            </section>
          )}

          {activeTab==="Case Studies"&&(
            <section>
              <div className="cr-sl">Customer Transformation Stories</div>
              <h2 className="cr-st">Technology decisions<br/>that changed businesses.</h2>
              <p className="cr-ss">Seven enterprise transformations — each with a distinct challenge, a tailored approach, and outcomes that became benchmarks.</p>
              <div className="cr-div"/>
              {CASES.map((c,i)=>(
                <div className="cr-case" key={i}>
                  <div className="cr-ctag">{c.tag}</div>
                  <div className="cr-cco">{c.company}</div>
                  <div className="cr-cr">
                    <div><div className="cr-cbl">Challenge</div><div className="cr-cbt">{c.challenge}</div></div>
                    <div><div className="cr-cbl">Approach</div><div className="cr-cbt">{c.approach}</div></div>
                    <div><div className="cr-cbl">Outcome</div><div className="cr-cbt">{c.outcome}</div></div>
                  </div>
                </div>
              ))}
            </section>
          )}

          {activeTab==="Leadership"&&(
            <section>
              <div className="cr-sl">Community &amp; Recognition</div>
              <h2 className="cr-st">Beyond the day job.</h2>
              <p className="cr-ss">Leadership that extends outside the enterprise — into community, equity, and the next generation.</p>
              <div className="cr-div"/>
              <div className="cr-lead">
                {LEADERSHIP.map((l,i)=>(
                  <div className="cr-lc" key={i} style={l.wide?{gridColumn:"1 / -1"}:{}}>
                    <div className="cr-lo">{l.org}</div>
                    <div className="cr-lr">{l.role}</div>
                    <div className="cr-ld">{l.desc}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {activeTab==="Gallery"&&(
            <section>
              <div className="cr-sl">In the Field</div>
              <h2 className="cr-st">Community. Leadership.<br/>Culture.</h2>
              <p className="cr-ss">Moments from the work beyond the enterprise — BOLDforce, Blkowned, Dreamforce, and the community initiatives that run alongside the commercial career.</p>
              <div className="cr-div"/>
              <div className="cr-gal">
                {GALLERY.map((g,i)=>(
                  <div className="cr-gi" key={i}>
                    {g.src?<img src={g.src} alt={g.caption} className="cr-gimg"/>:<div className="cr-gem">Photo coming soon</div>}
                    <div className="cr-gcap">
                      <div className="cr-gct">{g.caption}</div>
                      <div className="cr-gcs">{g.context}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          <div className="cr-footer">
            <span>Chris Roberts · Toronto, ON · <a href="mailto:chris.h.roberts@outlook.com">chris.h.roberts@outlook.com</a></span>
            <span><a href="https://linkedin.com/in/chrishroberts" target="_blank" rel="noopener noreferrer">linkedin.com/in/chrishroberts</a></span>
          </div>

        </div>
      </div>
    </div>
  );
}
