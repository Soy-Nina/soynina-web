import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const blogPosts = {
  "empoderamiento-ninas-costa-rica": {
    title: "Empoderamiento de Niñas: El Cambio que Costa Rica Necesita",
    date: "4 de enero, 2026",
    author: "Equipo Soy Niña",
    category: "Educación",
    content: `
      <p>El empoderamiento de niñas y adolescentes no es solo un objetivo social—es una inversión en el futuro de Costa Rica. Cuando empoderamos a una niña, empoderamos a su familia, su comunidad, y eventualmente, a toda una nación.</p>

      <h2>¿Qué Significa Empoderamiento?</h2>
      <p>El empoderamiento va más allá de simplemente dar poder. Es un proceso integral que incluye:</p>
      <ul>
        <li><strong>Autoconocimiento:</strong> Entender quiénes somos, nuestras fortalezas y nuestros derechos</li>
        <li><strong>Educación Integral:</strong> Acceso a educación de calidad que nos prepara para la vida</li>
        <li><strong>Voz y Participación:</strong> Oportunidades para expresarnos y participar en decisiones que nos afectan</li>
        <li><strong>Resiliencia:</strong> La capacidad de enfrentar desafíos y recuperarse</li>
        <li><strong>Autonomía:</strong> La libertad de tomar decisiones sobre nuestras vidas</li>
      </ul>

      <h2>¿Por Qué Enfocarse en Niñas?</h2>
      <p>En muchas sociedades, incluyendo la nuestra, las niñas enfrentan barreras únicas. Desde presiones de género que las limitan desde temprano, hasta falta de acceso a oportunidades educativas y económicas. Cuando invertimos en el empoderamiento de niñas, estamos atacando de raíz las desigualdades que luego se perpetúan en la vida adulta.</p>

      <h2>El Impacto Multiplicador</h2>
      <p>La investigación internacional ha demostrado una y otra vez que cuando una niña está empoderada:</p>
      <ul>
        <li>Tiene mejor desempeño académico</li>
        <li>Es menos probable que sea víctima de violencia o abuso</li>
        <li>Desarrolla relaciones más saludables y equitativas</li>
        <li>Contribuye económicamente a su comunidad</li>
        <li>Es más probable que eduque a sus propios hijos con valores de igualdad</li>
      </ul>

      <h2>En Soy Niña, Esto es Nuestra Misión</h2>
      <p>Cada programa que ofrecemos—desde Club Niña para las más pequeñas, hasta Club Cole para adolescentes, pasando por Familias y Tutorías—está diseñado con un objetivo central: empoderar.</p>

      <p>No se trata solo de información o talleres puntuales. Se trata de crear espacios seguros donde las niñas pueden explorar quiénes son, donde sus voces son escuchadas, donde sus derechos son respetados, y donde ven reflejadas las posibilidades infinitas de sus futuros.</p>

      <h2>Un Llamado a la Acción</h2>
      <p>Costa Rica tiene la oportunidad de liderar en equidad de género. Para eso, necesitamos compromiso, recursos, y comunidades involucradas. Si crees en el poder del empoderamiento de niñas, te invitamos a ser parte de esta transformación.</p>

      <p>Ya sea como donante, voluntaria, educador, o simplemente como un miembro de la comunidad que cree en un futuro más justo—tu apoyo cuenta.</p>
    `,
  },
  "historias-de-exito-nuestras-ninas": {
    title: "Historias de Éxito: Transformando Vidas en Costa Rica",
    date: "15 de diciembre, 2025",
    author: "Equipo Soy Niña",
    category: "Historias",
    content: `
      <p>En Soy Niña, cada día presenciamos transformaciones que nos recuerdan por qué hacemos este trabajo. Las historias de nuestras participantes son historias de esperanza, resilencia y cambio positivo.</p>

      <h2>La Historia de Sofía</h2>
      <p>Sofía llegó a nuestro programa Club Niña hace dos años, tímida y con baja autoestima. Según sus palabras, "no sabía que podía ser lo que quisiera ser". A través de nuestros talleres de empoderamiento, actividades recreativas y acompañamiento continuo, Sofía no solo ganó confianza en sí misma, sino que se convirtió en una líder dentro del grupo.</p>

      <p>Hoy, Sofía es una de nuestras promotoras de cambio. Ella ayuda a orientar a las nuevas participantes y comparte su historia para inspirar a otras niñas a creer en su potencial.</p>

      <h2>Impacto Mensurable</h2>
      <p>Los datos respaldan nuestras historias:</p>
      <ul>
        <li>85% de mejora en autoestima entre nuestras participantes</li>
        <li>500+ niñas y adolescentes impactadas directamente</li>
        <li>150+ familias fortalecidas a través de nuestros programas</li>
        <li>200+ voluntarias comprometidas con la misión</li>
      </ul>

      <h2>Más Allá de los Números</h2>
      <p>Pero los números no cuentan toda la historia. Lo que realmente importa es ver el brillo en los ojos de una niña cuando realiza que tiene el poder de cambiar su vida. Es escuchar a una madre decir que su hija ahora habla con confianza en casa. Es presenciar cómo una adolescente que fue víctima de abuso se empodera a través de la educación y el apoyo comunitario.</p>

      <p>Estas son las historias que nos inspiran a continuar, a crecer, y a llegar a más comunidades en Costa Rica.</p>

      <h2>¿Quieres Ser Parte de Este Cambio?</h2>
      <p>Tu apoyo, ya sea como donante, voluntaria o aliado corporativo, hace posible estas transformaciones. Cada contribución nos acerca a nuestro objetivo de empoderar a todas las niñas y adolescentes que lo necesitan.</p>
    `,
  },
  "educacion-sexual-integral-importancia": {
    title: "¿Por Qué la Educación Sexual Integral es Esencial?",
    date: "8 de diciembre, 2025",
    author: "Dra. María González",
    category: "Educación",
    content: `
      <p>La educación sexual integral es mucho más que hablar sobre sexualidad. Es un derecho fundamental que prepara a niñas y adolescentes para tomar decisiones informadas sobre sus cuerpos, relaciones y futuros.</p>

      <h2>¿Qué es la Educación Sexual Integral?</h2>
      <p>La educación sexual integral (ESI) es un enfoque de enseñanza-aprendizaje que abarca cinco dimensiones clave:</p>
      <ol>
        <li><strong>Biológica:</strong> Conocimiento sobre el cuerpo, desarrollo pubertal y reproducción</li>
        <li><strong>Psicológica:</strong> Emociones, identidad de género y orientación sexual</li>
        <li><strong>Social:</strong> Relaciones, comunicación y habilidades interpersonales</li>
        <li><strong>Ética:</strong> Valores, derechos humanos y responsabilidad</li>
        <li><strong>Preventiva:</strong> Información sobre infecciones de transmisión sexual, embarazo precoz y violencia de género</li>
      </ol>

      <h2>Beneficios Comprobados</h2>
      <p>La investigación científica demuestra que la educación sexual integral:</p>
      <ul>
        <li>Reduce el embarazo en adolescentes</li>
        <li>Disminuye las infecciones de transmisión sexual</li>
        <li>Mejora la comunicación en relaciones de pareja</li>
        <li>Fortalece la capacidad de identificar y prevenir violencia sexual</li>
        <li>Aumenta la autoestima y la toma de decisiones responsable</li>
      </ul>

      <h2>En Soy Niña</h2>
      <p>Nuestro programa Club Cole (para adolescentes de 13-17 años) incluye módulos de educación sexual integral diseñados especialmente para el contexto costarricense. A través de talleres interactivos, conversatorios y materiales educativos, preparamos a nuestras adolescentes para navegar esta etapa crucial de sus vidas con información, confianza y seguridad.</p>

      <p>Creemos que el conocimiento es poder, y el poder es transformación.</p>
    `,
  },
  "voluntariado-oportunidad-cambio": {
    title: "Voluntariado: Tu Oportunidad de Generar Cambio",
    date: "1 de diciembre, 2025",
    author: "Coordinadora de Voluntariado",
    category: "Voluntariado",
    content: `
      <p>¿Te apasiona el cambio social? ¿Quieres marcar una diferencia real en la vida de niñas y adolescentes? El voluntariado en Soy Niña es tu oportunidad de ser parte de una misión transformadora.</p>

      <h2>¿Por Qué Ser Voluntaria?</h2>
      <p>Nuestras voluntarias no solo apoyan a nuestros programas—ellas mismas son transformadas por la experiencia. Al trabajar con nuestras participantes, descubrirás:</p>
      <ul>
        <li>Tu capacidad de impacto directo</li>
        <li>Nuevas habilidades y conocimientos</li>
        <li>Una comunidad comprometida con la justicia social</li>
        <li>La satisfacción de contribuir a un propósito mayor</li>
      </ul>

      <h2>Oportunidades de Voluntariado</h2>
      <p><strong>Facilitadora de Talleres:</strong> Lidera talleres de autoestima, derechos sexuales y reproductivos, prevención de violencia, o habilidades de vida.</p>

      <p><strong>Mentor Personal:</strong> Acompaña a una niña o adolescente como su mentor, brindando apoyo emocional y orientación académica.</p>

      <p><strong>Apoyo Administrativo:</strong> Ayuda con coordinación de eventos, gestión de bases de datos y comunicaciones.</p>

      <p><strong>Especialista Invitada:</strong> Si eres profesional en algún área (psicología, medicina, derecho, etc.), puedes compartir tus conocimientos con nuestras participantes.</p>

      <h2>Lo Que Nuestras Voluntarias Dicen</h2>
      <p>"Voluntariar en Soy Niña me cambió. Ver el potencial en cada niña, acompañarla en su crecimiento, es una experiencia que no se puede comparar con nada." - Elena, voluntaria desde hace 2 años</p>

      <h2>¿Estás Lista?</h2>
      <p>No importa tu edad, profesión o experiencia. Si tienes pasión por el empoderamiento de niñas y adolescentes, hay un lugar para ti en nuestro equipo. Contáctanos para conocer más sobre las oportunidades disponibles.</p>
    `,
  },
  "violencia-genero-prevencion": {
    title: "Previniendo la Violencia de Género desde la Infancia",
    date: "24 de noviembre, 2025",
    author: "Equipo de Programas",
    category: "Prevención",
    content: `
      <p>La violencia de género es una crisis de derechos humanos que comienza temprano. En Soy Niña, creemos que la prevención desde la infancia es clave para romper ciclos de violencia y construir relaciones equitativas.</p>

      <h2>Datos Que Preocupan</h2>
      <p>En Costa Rica, como en muchos países, las cifras de violencia de género son alarmantes. Pero lo que frecuentemente se pasa por alto es que los patrones de violencia comienzan en la infancia y la adolescencia:</p>
      <ul>
        <li>1 de cada 3 adolescentes experimenta violencia de pareja</li>
        <li>La violencia empieza con micro-agresiones y comportamientos controladores</li>
        <li>Muchas niñas normalizan la violencia porque no saben que pueden esperar algo diferente</li>
      </ul>

      <h2>Nuestro Enfoque de Prevención</h2>
      <p><strong>Educación en Derechos:</strong> Enseñamos a niñas y adolescentes sobre sus derechos fundamentales, incluyendo el derecho a vivir libre de violencia.</p>

      <p><strong>Identificación de Señales:</strong> Ayudamos a reconocer conductas de control, manipulación y abuso desde temprano.</p>

      <p><strong>Desarrollo de Habilidades:</strong> Fortalecemos la comunicación asertiva, establecimiento de límites y resolución de conflictos.</p>

      <p><strong>Red de Apoyo:</strong> Creamos espacios seguros donde las niñas pueden hablar y recibir orientación.</p>

      <h2>Prevención a Través del Empoderamiento</h2>
      <p>Cuando una niña se ama a sí misma, cuando conoce su valor y sus derechos, no acepta conductas violentas. Cuando una adolescente está empoderada, tiene la confianza para decir "no" y buscar ayuda cuando la necesita.</p>

      <p>La prevención de la violencia de género no es solo responsabilidad de mujeres—todos los miembros de la sociedad tienen un rol. Por eso, nuestros programas también trabajan con familias, educadores y comunidades para crear entornos seguros.</p>

      <h2>Juntas Podemos Hacer la Diferencia</h2>
      <p>La violencia de género no es inevitable. A través de educación, empoderamiento y cambio cultural, podemos crear un Costa Rica donde todas las niñas crecen seguras, respetadas y libres.</p>
    `,
  },
  "autoestima-adolescentes-identidad": {
    title: "Construyendo Autoestima: Claves para la Identidad Positiva",
    date: "17 de noviembre, 2025",
    author: "Psicóloga Educativa",
    category: "Desarrollo",
    content: `
      <p>La adolescencia es un momento crítico en la construcción de la identidad. La autoestima durante estos años forma la base para la salud mental, las relaciones y el éxito académico de las jóvenes. En Soy Niña, trabajamos intensamente en fortalecer este pilar fundamental.</p>

      <h2>¿Por Qué la Autoestima Importa?</h2>
      <p>Una autoestima saludable significa que una persona:</p>
      <ul>
        <li>Se reconoce su valor inherente</li>
        <li>Toma decisiones basadas en sus valores, no en la presión de pares</li>
        <li>Es resiliente ante los fracasos</li>
        <li>Establece límites saludables</li>
        <li>Busca ayuda cuando la necesita</li>
      </ul>

      <h2>Los Desafíos Únicos de Ser Adolescente Hoy</h2>
      <p>Las adolescentes de hoy enfrentan presiones que las generaciones anteriores no tenían: redes sociales, estándares de belleza irreales, comparación constante, y un entorno digital que nunca se desconecta. Todo esto afecta su autoestima de formas profundas.</p>

      <h2>Las 5 Estrategias de Soy Niña para Fortalecer la Autoestima</h2>

      <p><strong>1. Reconocer Fortalezas Únicas:</strong> Ayudamos a cada niña a identificar sus talentos y cualidades especiales. No se trata de ser perfecta, sino de reconocer lo que la hace valiosa.</p>

      <p><strong>2. Crear Espacios Seguros:</strong> Nuestros grupos son espacios libres de juzgamiento donde las niñas pueden ser ellas mismas, expresar sus inseguridades y ser celebradas por quiénes son.</p>

      <p><strong>3. Celebrar Diversidad:</strong> Trabajamos para que las niñas vean la belleza y valor en la diversidad de cuerpos, razas, orientaciones sexuales e identidades de género.</p>

      <p><strong>4. Enseñar Auto-Compasión:</strong> Ayudamos a las adolescentes a hablarse a sí mismas con amabilidad, como lo harían con una amiga querida.</p>

      <p><strong>5. Promover Acción Significativa:</strong> La autoestima real viene de tomar acción, de contribuir, de marcar una diferencia. Por eso incentivamos el liderazgo y la participación activa.</p>

      <h2>El Impacto Real</h2>
      <p>Las niñas que participan en nuestros programas reportan 85% de mejora en su autoestima. Pero para nosotras, el éxito verdadero es ver a una niña que creía en sí misma solo el 10% transformarse en una joven que se conoce, se respeta y defiende sus derechos.</p>

      <p>La autoestima es el regalo que damos hoy para que construyan futuros brillantes mañana.</p>
    `,
  },
  "impacto-comunidad-familias-resilientes": {
    title: "Familias Resilientes: Nuestro Impacto en las Comunidades",
    date: "10 de noviembre, 2025",
    author: "Equipo de Impacto",
    category: "Comunidad",
    content: `
      <p>En Soy Niña, entendemos que no podemos empoderar a niñas y adolescentes sin fortalecer a sus familias y comunidades. Por eso, nuestro programa Familias es mucho más que un taller—es una transformación comunitaria.</p>

      <h2>El Contexto</h2>
      <p>Muchas familias en comunidades vulnerables enfrentan desafíos enormes: pobreza, falta de acceso a educación de calidad, patrones intergeneracionales de violencia, y recursos limitados. Pero dentro de esa realidad, existe un potencial infinito para el cambio.</p>

      <h2>¿Qué Hace Especial a Nuestro Programa Familias?</h2>
      <p>Nuestro programa Familias trabaja en tres niveles:</p>

      <p><strong>Nivel Individual:</strong> Fortalecemos habilidades de crianza, relaciones familiares, y resolución de conflictos en familias específicas.</p>

      <p><strong>Nivel Comunitario:</strong> Creamos redes de apoyo entre familias que enfrentan desafíos similares. La comunidad se convierte en el sistema de apoyo.</p>

      <p><strong>Nivel Estructural:</strong> Trabajamos con líderes comunitarios, escuelas y autoridades locales para generar cambios más amplios.</p>

      <h2>Historias de Resiliencia</h2>
      <p>Una de nuestras madres participantes, Rosa, llegó al programa sintiéndose completamente sola. Había sacado a sus dos hijas de la escuela porque "no había dinero". A través del programa, Rosa no solo mejoró su situación económica mediante capacitación laboral, sino que reconstruyó su relación con sus hijas y se convirtió en una defensora de derechos de otras madres en su comunidad.</p>

      <p>Hoy, sus hijas están de vuelta en la escuela, y Rosa lidera un grupo de 15 madres en su barrio que apoyan mutuamente y abogan juntas por mejores oportunidades para sus familias.</p>

      <h2>El Efecto Multiplicador</h2>
      <p>Lo que es hermoso del trabajo con familias es el efecto multiplicador. Una madre empoderada empodera a sus hijas. Una familia que sana inspira a otras familias. Una comunidad que se fortalece genera cambio estructural.</p>

      <p>150+ familias han pasado por nuestro programa Familias. Cada una de ellas es una semilla de cambio plantada en su comunidad.</p>

      <h2>Visión Futura</h2>
      <p>Nuestro objetivo es expandir el programa Familias a más comunidades en Costa Rica. Queremos que ninguna niña crezca en una familia que no tiene apoyo, que ninguna madre sienta que está sola, que cada comunidad tenga la oportunidad de construir resiliencia juntas.</p>

      <p>La resiliencia no es solo sobrevivir. Es prosperar juntos, crecer juntos, y transformar juntos.</p>
    `,
  },
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts[slug as keyof typeof blogPosts]

  if (!post) {
    return (
      <div className="min-h-screen">
        <main className="py-40 bg-white">
          <div className="container mx-auto px-8 text-center">
            <h1 className="text-4xl font-black text-[#140b3f] mb-4">Artículo no encontrado</h1>
            <Link href="/blog" className="text-[#4526c9] hover:text-[#fe35fe] font-bold">
              Volver al blog
            </Link>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-[#140b3f] via-[#4526c9] to-[#fe35fe]">
          <div className="container mx-auto px-8">
            <Link href="/blog" className="flex items-center gap-2 text-white hover:text-[#e0ff4f] mb-6">
              <ArrowLeft size={20} />
              Volver al blog
            </Link>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-gray-200">
              <span className="inline-block px-3 py-1 bg-[#e0ff4f] text-[#140b3f] text-sm font-bold rounded-full">
                {post.category}
              </span>
              <span>{post.date}</span>
              <span>Por {post.author}</span>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-8 max-w-3xl">
            <article className="prose prose-lg max-w-none">
              <div
                dangerouslySetInnerHTML={{ __html: post.content }}
                className="space-y-6 text-gray-700"
              />
            </article>

            {/* Call to Action */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <div className="bg-gradient-to-r from-[#4526c9]/10 to-[#fe35fe]/10 p-8 rounded-lg">
                <h3 className="text-2xl font-black text-[#140b3f] mb-4">¿Quieres Apoyar Esta Misión?</h3>
                <p className="text-gray-700 mb-6">
                  Cada historia que compartimos es posible gracias al apoyo de personas como tú. Ya sea como donante, 
                  voluntaria o aliada, tu contribución hace diferencia.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/#donar"
                    className="px-6 py-3 bg-gradient-to-r from-[#e0ff4f] to-[#00c49a] hover:shadow-lg text-[#140b3f] font-black rounded-full transition-shadow text-center"
                  >
                    Donar Ahora
                  </Link>
                  <Link
                    href="/#voluntariado"
                    className="px-6 py-3 bg-[#fe35fe] hover:shadow-lg text-white font-black rounded-full transition-shadow text-center"
                  >
                    Ser Voluntaria
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-8">
            <h2 className="text-3xl font-black text-[#140b3f] mb-12">Otros Artículos</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {Object.entries(blogPosts)
                .filter(([postSlug]) => postSlug !== slug)
                .slice(0, 3)
                .map(([postSlug, relatedPost]) => (
                  <Link key={postSlug} href={`/blog/${postSlug}`}>
                    <article className="bg-white p-6 rounded-lg hover:shadow-lg transition-shadow cursor-pointer h-full">
                      <span className="inline-block px-3 py-1 bg-[#e0ff4f] text-[#140b3f] text-xs font-bold rounded-full mb-3">
                        {relatedPost.category}
                      </span>
                      <h3 className="text-lg font-black text-[#140b3f] mb-3 line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-gray-500">{relatedPost.date}</p>
                    </article>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
