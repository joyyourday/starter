import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script
            type="application/ld+json"
            class="yoast-schema-graph"
            dangerouslySetInnerHTML={{
              __html: `{
                "@context":"https://schema.org",
                "@graph":[{"@type":"WebPage",
                "@id":"https://mxplayermovies.netlify.app/",
                "url":"https://mxplayermovies.netlify.app/",
                "name":"Mxplayer Movies™ Hollywood Bollywood Adult | Watch now the Best TV shows and Movies",
                "isPartOf":{"@id":"https://mxplayermovies.netlify.app/#website"},
                "primaryImageOfPage":{"@id":"https://mxplayermovies.netlify.app/#primaryimage"},
                "image":{"@id":"https://mxplayermovies.netlify.app/#primaryimage"},
                "thumbnailUrl":"https://mxplayermovies.netlify.app/logo.png",
                "datePublished":"2023-01-02T10:50:12+00:00",
                "dateModified":"2023-02-20T11:33:45+00:00",
                "description":"Mxplayer Movies™ Hollywood Bollywood Adult | Watch now the Best TV shows and Movies",
                "breadcrumb":{"@id":"https://mxplayermovies.netlify.app/#breadcrumb"},
                "inLanguage":"en-US",
                "potentialAction":[{"@type":"ReadAction",
                "target":["https://mxplayermovies.netlify.app/"]}]},
                {"@type":"ImageObject",
                "inLanguage":"en-US",
                "@id":"https://mxplayermovies.netlify.app/#primaryimage",
                "url":"https://mxplayermovies.netlify.app/logo.png",
                "contentUrl":"https://mxplayermovies.netlify.app/logo.png",
                "width":381,
                "height":77,
                "caption":"Mxplayer Movies™"},
                {"@type":"BreadcrumbList",
                "@id":"https://mxplayermovies.netlify.app/#breadcrumb",
                "itemListElement":[{"@type":"ListItem","position":1,
                "name":"Mxplayer Movies™"}]},
                {"@type":"WebSite",
                "@id":"https://mxplayermovies.netlify.app/#website",
                "url":"https://mxplayermovies.netlify.app/",
                "name":"Mxplayer Movies™",
                "description":"Mxplayer Movies™| Watch now the Best TV shows and Movies",
                "potentialAction":[{"@type":"SearchAction",
                "target":{"@type":"EntryPoint",
                "urlTemplate":"https://mxplayermovies.netlify.app/?s={search_term_string}"},
                "query-input":"required name=search_term_string"}],
                "inLanguage":"en-US"}]}`
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
