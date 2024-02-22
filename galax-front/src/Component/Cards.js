import React from 'react';
import axios from 'axios';
export default function Cards(props){
    
        return(
        <div
              class="flex-none w-2/3 md:w-1/3 mr-8 md:pb-4 border rounded-lg"
            >
              <a href="#" class="space-y-4">
                <div class="aspect-w-16 aspect-h-9">
                  <img
                    class="object-cover shadow-md hover:shadow-xl rounded-lg"
                    src={props.poster_path}
                    alt=""
                  />
                </div>
                <div class="px-4 py-2">
                  <div class="text-lg leading-6 font-medium space-y-1">
                    <h3 class="font-bold text-gray-800 text-3xl mb-2">
                      {props.title}
                    </h3>
                  </div>
                  <div class="text-lg">
                    <p class="">
                      {props.overview}
                    </p>
                    <p class="font-medium text-sm text-indigo-600 mt-2">
                      Read more<span class="text-indigo-600">&hellip;</span>
                    </p>
                  </div>
                </div>
              </a>
            </div>
    )
}