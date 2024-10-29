
const articles = [
    {
      title: "Šokující proměna slavné herečky! Takhle ji nepoznáte",
      href: "/articles/1",
      overline: "Celebrity | Včera",
      image: {
        src: "https://picsum.photos/seed/celebrity1/800/600",
        alt: "Herečka na červeném koberci"
      }
    },
    {
      title: "Nový milenec oblíbené zpěvačky! Kdo je ten neznámý muž?",
      href: "/articles/2",
      overline: "Showbyznys | Dnes",
      image: {
        src: "https://picsum.photos/seed/celebrity333dd/800/600",
        alt: "Pár na romantické večeři"
      }
    },
    {
      title: "Obří hádka v zákulisí! Co se stalo mezi moderátory?",
      href: "/articles/3",
      overline: "Zákulisí | Před 2 hodinami",
      image: {
        src: "https://picsum.photos/seed/celebrity3/800/600",
        alt: "Moderátoři v backstage"
      }
    },
    {
      title: "Královská rodina v ohrožení! Skandální odhalení prince!",
      href: "/articles/4",
      overline: "Královská rodina | Před 5 hodinami",
      image: {
        src: "https://picsum.photos/seed/royalfamily/800/600",
        alt: "Princ v rozhovoru"
      }
    },
    {
      title: "Zpěvačka vyděsila fanoušky! Tohle nikdo nečekal",
      href: "/articles/5",
      overline: "Hudba | Před 3 dny",
      image: {
        src: "https://picsum.photos/seed/singer/800/600",
        alt: "Zpěvačka na pódiu"
      }
    },
    {
      title: "Herec přiznal závislost! Otevřeně o svém boji",
      href: "/articles/6",
      overline: "Osobnosti | Minulý týden",
      image: {
        src: "https://picsum.photos/seed/actor/800/600",
        alt: "Herec na tiskové konferenci"
      }
    },
    {
      title: "Odhalen nový vztah slavného sportovce! Kdo je jeho přítelkyně?",
      href: "/articles/7",
      overline: "Sport | Před 4 dny",
      image: {
        src: "https://picsum.photos/seed/sportstar/800/600",
        alt: "Sportovec na veřejnosti"
      }
    },
    {
      title: "Pravda o krizi v manželství slavných manželů!",
      href: "/articles/8",
      overline: "Rodina | Dnes",
      image: {
        src: "https://picsum.photos/seed/marriage/800/600",
        alt: "Manželský pár na společenské akci"
      }
    },
    {
      title: "Luxusní dovolená slavného páru! Kolik to stálo?",
      href: "/articles/9",
      overline: "Lifestyle | Před 2 týdny",
      image: {
        src: "https://picsum.photos/seed/vacation/800/600",
        alt: "Pár na pláži"
      }
    },
    {
      title: "Skandální rozvod slavného herce a modelky!",
      href: "/articles/10",
      overline: "Skandál | Před 3 týdny",
      image: {
        src: "https://picsum.photos/seed/divorce/800/600",
        alt: "Herec a modelka na červeném koberci"
      }
    }
  ];
  
  export default articles;
  


export async function GET(
    request: Request,
    { params }: { params: Promise<{ namespace: string }> }
  ) {
    const namespace = (await params).namespace
    return Response.json(articles)
  }