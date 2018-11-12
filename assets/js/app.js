function toggle_mute()
{
  let vid = document.querySelector('#bg-video');
  let btn = document.querySelector('#Unmute');
  if(vid.muted == true)
  {
    vid.muted = false;
    btn.innerHTML = 'Mute Video';
  }
  else
  {
    vid.muted = true;
    btn.innerHTML = 'Unmute Video';
  }
}
