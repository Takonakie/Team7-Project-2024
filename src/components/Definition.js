import React from 'react';
import '../index.css';
<script src="https://cdn.tailwindcss.com"></script>


function Definition() {

  return (
    <section class="def text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="contimg lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="imagexx object-cover object-center rounded" alt="hero" src='https://i.gifer.com/AGzF.gif' />
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="defx title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">So what is Puma Computing?
        <br class="hidden lg:inline-block" />
      </h1>
      <p 
 class="defx mb-8 leading-relaxed">PUMA Computing (President University Major Association of Computing). PUMA is HIMA which exist in Preident University, have a job to managing and accomodating the aspirations of the computizens.</p>
      <div class="flex justify-center">
      </div>
    </div>
  </div>
</section>
  )
}

export default Definition;