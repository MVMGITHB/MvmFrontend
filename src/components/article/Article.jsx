import React from "react";

function Article({ data }) {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-5 flex justify-center">
      {/* <div class="max-w-3xl bg-white rounded-lg shadow-md overflow-hidden">
        <div class="p-6">
          <h1 class="text-3xl font-bold text-gray-900 text-center mb-4 underline">
            Sugar is Bitter{" "}
          </h1>
        </div>

        <img
          src="/images/blog.jpg"
          alt="Article Image"
          class="w-full h-80 object-cover"
        />

        <div class="p-6">
          <h3 class="text-xl  text-gray-800 mb-3">
            In India, where sweets spell celebration, the chances of being sugar
            dependent are high. What's worrying is that most of us are clueless
            about the amount of sugar we consume in a day. In the last 50 years,
            sugar consumption in India has gone up from 5% to 13% of sugar
            produced globally.{" "}
          </h3>

          <p class="text-gray-700 leading-7">
            So what harm can sugar do? It provides empty calories or false
            nourishments. In simple terms, it means it provides you energy but
            no nutritional sustenance. In fact, processed sugar (table sugar)
            has no minerals and often leeches minerals from the body.{" "}
          </p>

          <div class="p-4 mt-6 rounded-md">
            <h4 class="text-lg font-bold text-gray-900">
              Here's a closer look at how sugar can mess with your health, from
              head to toe.
            </h4>
            <ol className="text-gray-800 mt-2 space-y-6">
  <div>
    <li className="font-bold">(1) MAY INCREASE YOUR RISK OF DEPRESSION:</li>
    <p>
      A balanced and nutritious diet can positively impact your mood, whereas consuming excessive added sugar and processed foods can potentially influence your emotional well-being.
    </p>
  </div>

  <div>
    <li className="font-bold">(2) DRAINS YOUR ENERGY:</li>
    <p>
      Foods that contain a high amount of added sugar cause a rapid increase in blood sugar and insulin levels, resulting in a temporary surge of energy. However, this energy boost is short-lived.
    </p>
  </div>

  <div>
    <li className="font-bold">(4) MAY SPEED UP THE SKIN AGING PROCESS:</li>
    <p>
      Wrinkles are a natural sign of skin aging. However, poor food choices can worsen wrinkles and speed up the aging process. A diet rich in refined carbohydrates and sugar can increase the production of AGEs.
    </p>
  </div>
</ol>

          </div>
        </div>
      </div> */}
 {
        data?.content?( <div dangerouslySetInnerHTML={{ __html: data?.content }} />
        ):(<></>)
       }

    </div>
  );
}

export default Article;
