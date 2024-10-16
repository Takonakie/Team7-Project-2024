import React from 'react';
import '../../src/index.css';
<script src="https://cdn.tailwindcss.com"></script>

function CardItem() {
  return (
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="text-2xl font-medium title-font mb-4 text-gray-900">Our Division</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">In PUMA Computing we have Divisions, and here are the list and the jobdesc for each division</p>
    </div>
    <div class="flex flex-wrap -m-4" id='firstitem'>
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class=" imagex flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAB+1BMVEX///8RITCALhkVMUY3HQ74kB/tmF+7mpB8HgDcHybjgDzz9/gPIjDW29/n6Or///0MHir///l4MSFzKRX0lzDs8PETMkX6jhtHJhMAFynzql8TIDDummbsmV3yplcWMEfohUSDLhDGrKVvBwAAAAB+VykAGjA4HA8AABH0n2PX2uEdAABgOCM0SFg1Hg3tlloAABgkAAAqEQAzFADnrolMLxsrOEUALETe2NYoCwAiAAAADSUjMkEZKDcAABsAHyxUR0SrpJ4VAAArAAA7Jx02HRS7eU/pjlAzAABCAAAwIA4jPU/GysyvtblmbXQ0PUbCt7WbkoyBd3JhSz9ONCdiVk5KOjPSycFEOSiZk4l7bmZgWk90Yla0raM3GAA+LB+seFdOIgqlbEXYklyVXj/RimKBVT6IUCuEVThVKRHz1r7uxqhfRjf2wZr66NTijkrpp3GGQxxJAABQEwCZJCGvJCh7IR/deFnINSjFFhvbbUzUWUJtRy/658mtbi/006XLdyvzvn1vPRZBFQyPaUbnx7Txmz6gZSxCMBOvgE0AETGTazdOSTTDhD8AKE2Gi5NxVCzVbnTeAADpvrxYXmnQSk/Uh4bZKjnjqauboafgg4fq0tVIUVnfHSzfYmWhIjBoIS44HigzLi1OHiuOIC4rHSkLIyXIdUNmLCcVS+dFAAAW3klEQVR4nO2di18bVdrHM5uQd0OGzERJQpxJgyskhMAMJJCQkjQUTKJcilhLXa1Yudja1lp3t2rXWnFV3FUrvdjSbumqVVv/zPd5zswkk2ROuBgI4yc/hYYwE843z/WcOQMWS1NNNdVUU0011VRTTTXVVFNNNdVUU001ZRZxHH5w+E/pKY5+vPn0h4Khi/uDmY2uPyYpN/LS0bmXX54rfXX06NxIY8dUFynGGjl6fDw6ODiRiiLhyNwr49HDgxMT49MNHl0dRPhOnohOLNiIoictb8xHU2F4KNlsh12NHt/vF5hw5Hg0JkkKoCSdfDUaD9tUpf4A0ci5/zouTUo2DSqcAmMqX4TD0mSjh/d7BRZynxi0SbaiwiBbkXdhTD1KOdqEBuU491gqHLYZS5LirxE8TlOjx7tT4YBPTCAJjTD1sulbnb8eXrBR+AjhHBB6Xpp77cSpl4+asjSORKUFSaK5KSEcee3wRCoWj6cGx8deavR4d67X47QYVBQ/dWo8VfoqesJjsnQDJqS6qKJwvOzL2PMmc9W5wa0Iq4wqeRo96B3JfSK+NVSZScOxMVN5qeWNiR0SQt/6RqMHvRNxzy/s0EvBT990N3rYO9DJaO1UaqhxMyWbudSOTQjTjblGD3sHmo/ndk4Yf73Rw96B5naQaCQUdj+HXzLRupwrSm9KDRGRcNBtpr7mtfjOAjGshKFpCDlIpgphbBtwKWVyjKnULIA40OfJ+tPw6Y5YWCKT+2rfJP5pS711ehhNuDBvMREhjHRuEM0zHBEXO1LSJMkmUhlfDrml1PCiGOmQ4NHE0UYPekfiLK5xBOmI2CPi6b4JXHErN+PCQjgXO9yXD0Ts9g78VtRUy4uYMEjvPSyKdtkeWVoejsV0IbkgTeZiqY7llYgcCIiEMH7CRC6qEB7Fkjhsl4FAFCORpcW3O6KpVIwoFY1fXVwRIzJ8O6DYcPANUxGiPOOQPobBB4mAJBIRl/KLi8vLy6fzS8CsfsceEJEw6jEdoeV4PFwitAcC6I+yLEciEfgs2+06QnDS+UYPdxc6OhgOlwiJIWVwWLtdxMdIa5eLhKbqujWNREuEYDh4JIpi0aCyXdTbMGrGS1Ec1PFhe8AuR5byy2fOLOdVk4GAKn/27NnlvBjRCM21SqNqHjONKC+dnegKD/f1ndF5rGw/09f3zkJX6ixatsO28DxnpoZG03wcCVfi0bNL6Kai3a5HhGwqrrw9Hl5BG5JqaEJCrPjy58NLEZnglfInxiEkVSggK8PvRMxMGO4AJ4WsuXT2aj4iizoLBuxi/irYVl5aUm1oLnFk1WxeUuqhKNpSueiSvgaC8tFYrCOi5lKlZzPNZTY3Z3GfG7p0/hVJrRZL0ZwttlwWh/bImVhOimrVIn7h3aGhc5zbHIAWt8U9VHgPGupwjhAGliakyfG8HChDXByXcinNhrY+7AeGTLJgCq42JIsBOTIsqYRifiF2VgyUE4pnUwv5YsXvE0XZXjhvDi/lLBdxxhCIdNgUQhHmiFDaVS8taOEYUTschTACuUeWLzobPfptCMxwXiEYlqTyvpSoUy4PyCIhdqrnGj36bQmctKAQ2gwJO2mEAVF+1xxeWiK0GRAWWgsUQtkkhOCl78p0GwbsnRWIZAZMvNQun2/06LchKPbcuQL0ZSISQkkPVCK+19r6XlleDXRMSooNC6aIQ+gv3dCpYbWwSQtiJSGYqrW1tay9EeMSEsK3RLcpmlOoh+exQ0PCFCTI8sQC80UgLOir49JhhVAsmMFJiTj3EK48IeFSJaFd7mztBC8udTiBfMxGCLGnMYMJLeio7ktyQe7IhWP5SGUcwjdknD+VnliMLeT6InIBmzaTEELvja33MBAuV5eLSkXOxsK5Vy5dMkWW0QShCJDzmEGqUk2VxLfIirfFbZK+WxOHqxiSFFvZ0oYrKclsa/pkhgh1cT5us0UXiyaUy1V00sWYJCGhOeYVZRqLSzBDVFBE+dJQuS4Raki10LPZ4q81erC7El7plgbzyioptCvlcXYOn5fFSB63KJLtpuaz4dwEXjXrI9lUtA+NlGuIENrFPtyXMmFOwqMTUjgcTp0mNgwE3n/hby+i/vbiCy+++ML7shqF5AaMwZdMGYcnD+P1+Vx8Ccs7zP7O/P2Df1xG/eODvy+LuKIoB1Y+z4XDki06YkpC57hyxbcP6Ox4KebDj65cubIBHx99KJKuLSD2hcO2sBQeb/RYd6kxZZNp7KpIFm7g48N/fvzxx//8EFs5sKEs9sVsSGi6BWFFnLb3azLWtyQTQOUyKTxAFyWAOckGVhw88PswKCE0Mq7uwZzsyIsRWSSMdgUWIjO/kAtLC2H4FD3g+y45XMTn3AYai9kmFwhl9OoKXt3W2ptARMz3pSaVNyAXP2FwNrxrbuyNDkT+4SyfXGo30Nq1GJhIUvd29S2v4KaMCK6TriwPpybVLUSSFL1udHb7MxcPCB/0Kp/6DNXS3pGzKRtNIdxysdRgR9/Vq1f7Og6nYlApF1QfznW0G57s831qOSAzxk9afC3KqMrl861GpbCk7D2clMJoL2izc7kwphebug8sN7haeaJyNnx8ckCs+JmvhTbGf+XCk7awAiMRh5VKdyRipbCFB983Old5gc8OBqDlGUM+orW3crU2mkrSgvROO53wmQPS6RyiE/pWP5+00W/xyoVzn7dTPMAkhC0tqx3x3CTNjguTb635WkxNiDnxnRR1436qD12UeroZCImuhWOSrewmGni8kMvFwtdq8RHCRrMp2oqwpeWLHNhR2SeMm7oBMBxLSV9glaHnGcWGjYYj2orQ96n7fP7sO+rmUtxfmkoNn81/6f60tgnNQuhrOed0finj7tJ8fnER/l/MY/9W+NLJfdpe+9SDT4h5sv0Tp9PpHsIrbni9Rm29A/KQG57/REWsbojMQKgMeu2iE3VRLNttIsuX8Hm385M189rQp4zRqeriku7Sb6CwooB7nBc/W2svvh3mIgT/XP3q3zNcEVEsXRdVLIiAHtfMq/9ZNZ8N0SKr3a+OhkaPOYu6WFrKFxVAIHRZ1vu9iTe/MYQ8YIR6zPbr3fxoiGEEIWHRIYoyWcOwqy4KhB6PM5FI9PtDX/Pdq+34Ir6DTKiOcO3aBT4UEhiU0OUqETrdlwqBgqi5qOqlGUBkBIb3+x9fvbbWon+3DhahDxceIPS+mQ8lvazAsISQGZix6BGHCmqZAPMpiDNMfyLDCCwrCEwymf32m9VSjTxghC3ta9e/eJT8Lum1BsE9VRuOrusJAVHUABVE53paOVAIhXiv1ZpMJue7r2tV8sAQYuQBXsKbDAb7p6xebyahjjud3iwGHGHivnQTOlVOy2yGYXg8HrzVaoVzrVNTycyNVXAK38EhRPvdSMPQrFP9wX6rtz/BsOB6TDqRYVmXajGFyLVxUU+IYcjDcWxmNs1m+gERXsHb3//11zfaD5QN29cuTAVn01PWfi/YcGoqnZj19zNMQkgk/DMqoOKYN2/dLLPhDJ9g2VmwH5+ehdOBztoP7xLLh/4NiAeG0HdoPs3ziTTaENwMBpkAvxPSmQTrz6x7NB8F3b7luHUbvVVltqyDDdP4kU7wU2A/+ID/piCOQ8+vHRgbrq19OwWpUCMEM04lMBBx5IzwvUbocro8dxwPHXdcJULPZlohzOC/xMf7wQ9YzFShR+2HDgag5Zk3p2CMbCIxBREEoQRDTKR5hZDP+F2uYp65u+FwOB7eLUamq3cgQQiZjN6GVpZlIIxDb37W+F1SxIte/xqccjbBJKwK4RTacBZSTYKBz+w0Iip2vLzh2Nhw3NHKhcs1PZouI4RXgNfoz4DXghP4X2/8mjeuFK0fCUEMQjbMqITW/imo+JmEkAbqdPq+CxAJoevuxsONK457HoUQnl/3p0kMYq1gkRD93DqVYNPo5uzAfUvD9xFxlukuHj0SGHmrFwoGKAg2hBFDQYTP6e8RRUF64AAbXnngIogI/r0/jTkKK0uaxTyM708/pNJMGp5jhZ7pxhN6/NCgCaRHY0nBJhK0pgbEu1wE0ely3b71EALxtselErqEYnsHp3ut6tkZhlVekAnxeNteYzPq936mOESN0OtldBqYVhAB6R4hvOcBI5LnpnsEtkiYsaryWrVnBcb/faMJZ3qYrQhH7xNzoVPedTgUQvXr+6O64wwIQT0zjd2m4RkVysaoeqk3o3vWf6xIdBMBb/23+PUxPysYEGY0Qvgs8J6GmvDYKFM2Rs2GekKBd2pEd4gNb2qEzoqzNWmELKQwwX+sURUD39npLr07sjDGoDpI/dMDvSqga8OBcfiRCujq1bs4Y9UR6k7nu6Ybh+hM6AGphEdmPCrhFULo8GhheIRGqENk+dnGlX39CImKhPpUw2qB6HlAnNRxa6QYhnpnLgJ6ofzoTse63yA5B/TeVEFY+hbrn1UJb6uED1QjJipONiQEDTTmljZo10ZZhjEepN5LGbarTSG8d0tBvO2pCkMwVelktuJ1B9YbsznT1SNUEyq5tJyQH5hRy6FKqBbEGb2T8zpChhXKjdjlaQhhWRSVEcLnjA6e9a97SuUQpBREz7r+BdhMDUKoGA0gbOuqDJeSDaEg8rpAzCqBqJZDh+N/ypez2yZketr2nQ9NyLIV48iUCL2ZUtFn2VESiJ4NlfAOVg5Xmy4MhUzGW4OQDR3bZzqIirayYq/Z0FsaJ2JqrqoGogro2CC8Mz0aRrGKFgmrXrlrn43IGUYhW0FoLRKOriPTA43Q8UAJwx0Q+vfZiBzX1lMZgwaERUf1b2Lk3dYAb2G58GwW36NMOWHQgHC/jeiGlrt6FBWE1mApmo6gDe8VCUm5GNWKDctsg3Cfjci5jKKwklDXXvZM68qhQjg9wBQJM1sTMl2uff0dNphItyC0WoVSNRmAiui5qRFCQfS47qs2ZEHMNgj96/s52fccMRpEJaHuED8uR90pZhqYIWIYFg8QtkHI9OznbzVfH92aMOjVtd+CoCuHUBCBkNEWoQRB2EYcqt3p/oizQEfKb4NQN9PH5SiyDEV0xeWZHlAJAXA7uRQ6V/9+mZDjquaFRoQo6KfV743e9zwohqHjygPdIhTLlp9EI4SZ9L456awhoAFhyYj+Y87bJULHA2epY2Az2yT0z+4X4HSP0QBwDJWEXi3YWDbjvFcChJKva1u93kovNX51oWd/fm8dp18E3ooQir66atbTdldHeK80+wVA67bikFWWh/debleP4QCUaXqFw0FNJClJgCD6r47w7syANmyMwq37UiKhx2XZ+6qPixcUEzKstUpeLen61/9XInTcVGa/QnWaIb5dNT9UNbq+H4ROP+XHly21FJXRrkDMlgr+Q8cdLVlVpZmahIzfuQ/LGTNVK2y1bKiuK0LR4y/rCC9ntRepBqxFODCzD73prH8HhF61YgiskP2hRPjwh6x6YSJTDVjThpt7C8eRiSGNDzCs6WD1gFko+zDi7Adgu4dqW/Ojsu8NK6gB4mOBpwVCT9uemhBjYJ1WKqCt+q6yWigmQXPBmH8qJZqHP2WVUzJGhN6QwNPSNc4w9lScc4AKyPAhryEhpkx0U/WqBWhDIzB+SwTWqO0lhOyer3/PGLekRKFHwaCR03lZ3HrIQiBqhD9keYJgtRohBh+BESmEJNfsoTjLJsVJAYHv+U/IIAzJ9VIeCX8peukvSAhzCmt1iwBKXueFEO1t3OtcQ88zISHUvZY0dDp1VTH7s0Mz4s9Z9jEvCEYGR8L2biogFIy9XZKi9jO8wGfX2rOV/ZdCqF7y5LUp8AZEJVjVoNirhGtfU7yUUfuavRP1BwtgQt/aY8Mw1C7UZC8Xw5BsIjZ6OxRCXzc1Y0P/vZeA1HkT1EL/mq89beylQaXsYyASN/0lhJc8qhpuVcF0u29tlNpWMAN7OYc6FjJYYiPiwYQt7bMUv8NVKSgQPystG4YhzKoqJ01FwtmWlpbuUEigJNS9XDn1DAg0Qsbf3uJroRLiDhuW+ZVsTXRskJbNSiV8BC+1NorJlmLEvSuJMKmjEYa6cev5GC20yB4ZLRCh7WZ5rBTGByfncRN7d4iv0X7vVeu2SQVkeHLz0liSQohL/KxWEX8JweNgkEp4HO+3WMtSIzG7uTeEnMXVRVleEBh/N94J5DtOI7SSZJP9UWm7swwUezrhBXJHSTc15pke1x4R3jcuhjgQSKR4v8yFJA0wCN0mk/2VpJpfDWf2JcIb5L7FNf9jihWFI/f3wIg4rZg1LlJQvTGRIuGNGoRWKy+QQNzIMgzlMI2wRYlE2hRK2Is9RFyNjg1aTvWm8xvJGraxKhURmlLGaN5bIuxWbnxq99MqE7MXs0SOvgJF2hnlxqDumoTBxyQQfwtRuxmF8Bv1DjZad8ozo3uzSypDS24Cr97q6vuG5qVE3kz2V5jm/8TXOijoRUJyD+NaljdMbQLDZyzu+u86pU8r/N2+bRHigsZlCEOh9kHJrxSHgEj0V+1JUgjZnrY92FdLXybli3crf0WtFooRvTAL/iFb8xiNkPw2gqzhNS5GmWDUnTARorYzPu2+yGs149Br9WY/cPwYqnUMEl7TbkCEdMoYEwoZS92XFdt6KE2UkD1UvLX1OiGkNqdQFH96+FOtNBOEyYmO8BBtvUbAbFpnwvVRY0L2yP1D5AZZ1Op3wRqEKPZyzSgMeiHTXC/eRPrM/SMUROKm9SXMGLb60GFmLYfUXxLl863WjkOk/9FruFplVXu4IBKSNIMfh9y07tSfqL+TVu/TY0ji3ly/0a3pRjKTyQRrUtIWZ5AQd8NlMkzp9U6tb9IW3cBN64uIPakBISafUb8/pCqLG0yEWoTequuhJULc2/CYhx6wJD918Xu0rr0pvFTC+AcZWJVllaWMoKEtg1UtKa6xBrVHlRajzS6gy+ivHx/ZlW+0B4ry7jL9mgwYDQghMxXPoBJVv5Fd9fxDZlyNJahqQH8vub+izdVr0GBXE6KUGzLgDPoiYhVhXTfVAmGNyxUVP5rh29p6QfDZILMa2RAIlRPa2uiXfaoI67rkBoQ1LldUEvrbNIWSuAjuJY5ILtrA/zzkE+K9pHLiNfxgMknoendCyNSXsFbbbUTYqwCOvH11PoOQyST+rgQQZB8WefEx2u87/O788bdHCGHvjgjru/Wb81CWaIwJFfWebG3tLOQXj4+pOjGWTibZZDI9VtSpxSeF91o7NcLe7RMyXXVcU8S6s0mbcFMJe3tHOlt16ixEZPH0KeHUyiV7pFD2rdZdEPL1vAaFO1cpW9lqELb1jrRWqKD+HasKvtbCLgjrfh3R6adel6URtlURImLAXqh6euc2ZAW+7otRMz2067LbJewkf5BM7qwG3HkcCj0zljr/pT235diRbUUijRD4AuChBgbcDeGRY3Wf48OrbW6r6hsTkj8uI8qVAbhbwiOb6ph+H1GVjnX5Wdo2kGrC3iIhmg9/hTeFTyPcVk+DP97fpeyH/j2EnPFK1vRsjz/L1hZT6tpGnigA5A8i0eyHejLSpvRtvaGtXl3wj/bM1qWb4TjDX9fQtr7J8lupTb2ReeTRheUnTwoFqBCiWOg01pMnX3z7SL0V2tW25Wuzm+t16mU4yxvPPV2tp7al0sG//fbUs6A/PUvT03DIb0/t6uVLem53hH/5859+n4ALPj1b/Pqp6kOe1o7UTnm2+pht6LldRCRXB8L903O7+AUoTcKDpSZhk/Dgq0nYJDz4ahI2CQ++moSGhBbuL8/92SzaJeHJ/zOPdg5o2ddfX9AQcZy2WMOpnw70g90g4rYx86jeBm6qqaaaaqqppkym/wfXsb6/uBX9KwAAAABJRU5ErkJggg==" />
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-gray-900">Chairperson & Vice Chairperson</h2> <br></br>
            <p class="mb-4">Controlling and managing all of the PUMA events that will be held and planned before. and also as the representative from PUMA Computing.</p>
            <span class="inline-flex">
              <a class="text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="imagex flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://static5.depositphotos.com/1006571/503/v/450/depositphotos_5033287-stock-illustration-secretary-in-the-office.jpg" />
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-gray-900">Secretary</h2> <br></br>
            <p class="mb-4">To run the administrative function of the organization, making MoM in meetings, and responsible for every information of cumputizens.</p>
            <span class="inline-flex">
              <a class="text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="imagex flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://cdn.xxl.thumbs.canstockphoto.com/illustration-featuring-a-female-accountant-computing-stock-illustration_csp4814746.jpg" />
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-gray-900">Treasure</h2> <br></br>
            <p class="mb-4">Responsible for keeping the money of the organization, monitor and always report for all the transaction, and manage bank account properly.</p>
            <span class="inline-flex">
              <a class="text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="imagex flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://previews.123rf.com/images/ntlstudio/ntlstudio2002/ntlstudio200200156/139757748-human-resource-management-flat-concept-vector-illustration-businessman-sitting-on-word-2d-cartoon.jpg" />
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-gray-900">Human Resource Development</h2> <br></br>
            <p class="mb-4">Focuses inincreasing the capacity and quality of student resources and soft skills from computizen. 
            Workplan : Compclub, PUMA CompRegen, Compsphere, Compreciation</p>
            <span class="inline-flex">
              <a class="text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4" id='firstitem'>
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="imagex flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://podcasts.chconline.org/wp-content/uploads/2022-12-21_The-Importance-of-Self-Advocacy_Post-Featured-Image-700x350@2x.png" />
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-gray-900">Student Welfare Advocacy</h2> <br></br>
            <p class="mb-4">Has a role as a bridge between computizen and campus in charge of escorting and advocating for problems experienced by computizen. Event : Compbraints, Compast. Workplan : Aspiration week, CIC, ComPast.</p>
            <span class="inline-flex">
              <a class="text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="imagex flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://asset.kompas.com/crops/cZyqjOfO_ny8eMtvwFL19XYtnwg=/0x0:3000x2000/750x500/data/photo/2022/01/27/61f267172a737.jpg" />
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-gray-900">External Relation</h2> <br></br>
            <p class="mb-4">Organize activities or events related to parties outside the campus. Event : SOSPRO (Social Project) 182, Comparative Study, Company Visit.</p>
            <span class="inline-flex">
              <a class="text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="imagex flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://img.freepik.com/free-vector/young-people-standing-talking-each-other-speech-bubble-smartphone-girl-flat-vector-illustration-communication-discussion_74855-8741.jpg?q=10&h=200" />
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-gray-900">Communication</h2> <br></br>
            <p class="mb-4">Disserminate accademic or non-academic information through PUMA Computing SocMed, Create and brainstorming for PUMA content in IG. Workplan : MoMo, Cominfo, Vals Day. Event : Temu Alumni, Combrainst.</p>
            <span class="inline-flex">
              <a class="text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="imagex flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://swadhyay.awgp.org/wp-content/uploads/2022/02/aabc2b_d0ee6043002c492ab108439288c3e0ec-mv2.jpg" />
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-gray-900">Internal Relation</h2> <br></br>
            <p class="mb-4">strenghthening the relationship between students and students, students and lecturers, and students and alumni. Event : COMPShadow, COMPGath, Alumni Gathering. Workplan : PUMA Bonding</p>
            <span class="inline-flex">
              <a class="text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4" id='firstitem'>
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="imagex flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://img.freepik.com/free-vector/happy-children-playing-different-sports_1308-127054.jpg" />
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-gray-900">Art and Sport</h2> <br></br>
            <p class="mb-4">focuses on developing interest and burning the arts & sports in the computing sphere. Event : Comphealth, Computing Sport Games Olympiad, SOPU PREP..</p>
            <span class="inline-flex">
              <a class="text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="imagex flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://school.mangoanimate.com/wp-content/uploads/2023/07/animated-slideshow-maker-1.jpg" />
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-gray-900">Research and Technology</h2> <br></br>
            <p class="mb-4">in charge of developing ideas and sharing knowledge in the field of technology. Event : COMPCLUB, COMPSHERE. Workplan : Cominfo, CompCorusader, website development</p>
            <span class="inline-flex">
              <a class="text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="imagex flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://i.pinimg.com/originals/01/32/31/01323190cd6933de96287a5804fd636a.gif" />
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-gray-900">Design</h2> <br></br>
            <p class="mb-4">In charge of collecting and processing information into a form of visual communication and drafting content concepts to be displayed  on each social media of PUMA Computing. Event : CompBrainst.</p>
            <span class="inline-flex">
              <a class="text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="imagex flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://img.freepik.com/premium-vector/business-man-waving-with-his-hand-concept-young-entrepreneur-spirit-cartoon-style_56103-946.jpg" />
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-gray-900">Entrepreneurship</h2> <br></br>
            <p class="mb-4">strenghthening the relationship between students and students, students and lecturers, and students and alumni. Event : COMPShadow, COMPGath, Alumni Gathering. Workplan : PUMA Bonding</p>
            <span class="inline-flex">
              <a class="text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</section>

  )
}

export default CardItem