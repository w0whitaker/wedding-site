String.prototype.capitalizeFirstLetter=function(){return this.charAt(0).toUpperCase()+this.slice(1)},function(l){l(function(){l(".form-error").hide();var t,o=[];function n(e){o.push(e)}function s(){if(0===o.length)l("#currentEntries").html("<p>Please click 'Add Guest' to begin.</p>").removeClass("form-results"),l("#removeGuest").addClass("hidden"),l("#submit").addClass("hidden");else{for(var e=0,t=o.length,n="";e<t;e++)"no"===o[e].attend?n+='<p class="form-results-item">'+o[e].name.capitalizeFirstLetter()+" sends regrets.</p>":n+='<p class="form-results-item">'+o[e].name.capitalizeFirstLetter()+" would like "+o[e].entreeType+".</p>";l("#currentEntries").html(n).addClass("form-results"),l("#removeGuest").removeClass("hidden"),l("#submit").removeClass("hidden")}}function e(){l("#name").focus();var e={};e.name=l("#name").val(),e.attend=l("input[name=willAttend]:checked").val(),e.entreeType=l("input[name=entreeType]:checked").val(),console.log("guestEntry",e),n(e),s()}function i(){e(),dialog.dialog("close"),l("#menuChoice").addClass("hidden")}function r(){if(""===l("#name").val())l("#nameError").show();else if(l("input[name=willAttend]:checked").length<=0)l("#willAttendError").show();else{if(l("#attendNo:checked"))return l(".form-error").hide(),1;{if(!(l("input[name=entreeType]:checked").length<=0))return l(".form-error").hide(),1;l("#entreeTypeError").show()}}}s(),l("#attendYes").click(function(){l("#menuChoice").removeClass("hidden")}),l("#attendNo").click(function(){l("#menuChoice").addClass("hidden")}),dialog=l("#rsvpForm").dialog({dialogClass:"form no-close",autoOpen:!1,height:"auto",width:600,modal:!0,close:function(){form[0].reset()}}),l("#reviewEntries").on("click",function(){r()&&i()}),l("#addAnother").on("click",function(){4===o.length?i():r()&&(e(),form[0].reset())}),l("#cancel").click(function(){dialog.dialog("close")}),form=dialog.find("form").on("submit",function(e){e.preventDefault(),n()}),l("#addGuest").button().on("click",function(){dialog.dialog("open")}),l("#removeGuest").button().on("click",function(){o.pop(),s()}),t=window.location.protocol+"//"+window.location.hostname+"/dist/scripts/mailgun.php",l("form#submitGuests").submit(function(e){e.preventDefault();e=JSON.stringify(o);return console.log("json to submit: "+e),console.log(t),l.ajax({type:"POST",cache:!1,url:t,data:e,contentType:"application/json; charset=utf-8",dataType:"json",success:function(e){"success"===e.status?(l("#currentEntries").html("Submission sent succesfully.").removeClass("form-results"),l("#submit").addClass("hidden"),l("#removeGuest").addClass("hidden"),l("#addGuest").addClass("hidden")):(l("#currentEntries").html("Submission failed. Please contact us directly - event at williamandlaura dot us").removeClass("form-results"),l("#submit").addClass("hidden"),l("#removeGuest").addClass("hidden")),console.log(e)},error:function(e){console.log("Silent failure.")}}),!1})})}(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGFua3MgQWx5c3NhIGZvciBoZWxwaW5nIG1lIHdpdGggdGhpcyFcblN0cmluZy5wcm90b3R5cGUuY2FwaXRhbGl6ZUZpcnN0TGV0dGVyID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnNsaWNlKDEpO1xufTtcblxuLy8galF1ZXJ5IHdyYXBwZXJcbihmdW5jdGlvbigkKSB7XG4gICAgLy8gQ29kZSBnb2VzIGhlcmVcbiAgICAkKGZ1bmN0aW9uKCkge1xuICAgICAgICAkKFwiLmZvcm0tZXJyb3JcIikuaGlkZSgpO1xuXG4gICAgICAgIC8vIEFuIGVtcHR5IGFycmF5IHRoYXQgd2lsbCBob2xkIHRoZSBndWVzdCBvYmplY3RzXG4gICAgICAgIHZhciBndWVzdHMgPSBbXTtcblxuICAgICAgICAvLyBSdW4gdGhpcyBmaXJzdC4gSXQgd29uJ3QgaGF2ZSBhbnl0aGluZyBpbiBpdCBleGNlcHQgZm9yIGEgbWVzc2FnZSBwcm9tcHRpbmcgdGhlIHVzZXIgdG8gYWRkIGEgZ3Vlc3QuXG4gICAgICAgIGRpc3BsYXlDdXJyZW50RW50cmllcygpO1xuXG4gICAgICAgIC8vIFRoaXMgZ2V0cyBjYWxsZWQgYnkgZW50ZXJHdWVzdC4gZW50ZXJHdWVzdCB3aWxsIGNyZWF0ZSBhbiBvYmplY3QgY2FsbGVkIGd1ZXN0RW50cnksIHdoaWNoIHdpbGwgYmUgcGFzc2VkIGFzIHRoZSBhcmd1bWVudCB0byBhZGRHdWVzdEVudHJ5LlxuICAgICAgICBmdW5jdGlvbiBhZGRHdWVzdEVudHJ5KGVudHJ5KSB7XG4gICAgICAgICAgICBndWVzdHMucHVzaChlbnRyeSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUaGlzIHdpbGwgc2hvdyB0aGUgZ3Vlc3RzIGFuZCB0aGVpciBjaG9pY2VzLiBBdCBmaXJzdCwgaXQgd2lsbCBzaG93IGEgbWVzc2FnZSBwcm9tcHRpbmcgdGhlIHVzZXIgdG8gYWRkIGFuIGVudHJ5LlxuICAgICAgICBmdW5jdGlvbiBkaXNwbGF5Q3VycmVudEVudHJpZXMoKSB7XG4gICAgICAgICAgICBpZiAoZ3Vlc3RzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIC8vIFRoZSBpbml0aWFsIHByb21wdCBmb3IgdGhlIHVzZXIuXG4gICAgICAgICAgICAgICAgJChcIiNjdXJyZW50RW50cmllc1wiKS5odG1sKFwiPHA+UGxlYXNlIGNsaWNrICdBZGQgR3Vlc3QnIHRvIGJlZ2luLjwvcD5cIikucmVtb3ZlQ2xhc3MoXCJmb3JtLXJlc3VsdHNcIik7XG4gICAgICAgICAgICAgICAgLy8gT25seSBzaG93IHRoZSByZW1vdmUgYnV0dG9uIGlmIHRoZXJlIGlzIGF0IGxlYXN0IG9uZSBlbnRyeS5cbiAgICAgICAgICAgICAgICAkKFwiI3JlbW92ZUd1ZXN0XCIpLmFkZENsYXNzKFwiaGlkZGVuXCIpO1xuICAgICAgICAgICAgICAgIC8vIERpdHRvIGZvciB0aGUgc3VibWl0IGJ1dHRvbi5cbiAgICAgICAgICAgICAgICAkKFwiI3N1Ym1pdFwiKS5hZGRDbGFzcyhcImhpZGRlblwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gR2VuZXJhdGUgdGhlIHRleHQgdGhhdCB3aWxsIGJlIGRpc3BsYXllZC5cbiAgICAgICAgICAgICAgICB2YXIgaSwgbGVuLCB0ZXh0O1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDAsIGxlbiA9IGd1ZXN0cy5sZW5ndGgsIHRleHQgPSBcIlwiOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGd1ZXN0c1tpXS5hdHRlbmQgPT09IFwibm9cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSAnPHAgY2xhc3M9XCJmb3JtLXJlc3VsdHMtaXRlbVwiPicgKyBndWVzdHNbaV0ubmFtZS5jYXBpdGFsaXplRmlyc3RMZXR0ZXIoKSArIFwiIHNlbmRzIHJlZ3JldHMuXCIgKyAnPC9wPic7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9ICc8cCBjbGFzcz1cImZvcm0tcmVzdWx0cy1pdGVtXCI+JyArIGd1ZXN0c1tpXS5uYW1lLmNhcGl0YWxpemVGaXJzdExldHRlcigpICsgXCIgd291bGQgbGlrZSBcIiArIGd1ZXN0c1tpXS5lbnRyZWVUeXBlICsgXCIuXCIgKyAnPC9wPic7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gVGhlIGFyZ3VtZW50IHRleHQgaGVyZSBpcyBnZW5lcmF0ZWQgYWJvdmUuXG4gICAgICAgICAgICAgICAgJChcIiNjdXJyZW50RW50cmllc1wiKS5odG1sKHRleHQpLmFkZENsYXNzKFwiZm9ybS1yZXN1bHRzXCIpO1xuICAgICAgICAgICAgICAgIC8vIEFzIHdlJ3ZlIGFkZGVkIGEgZ3Vlc3QsIHNob3cgdGhlIHJlbW92ZSBidXR0b24uXG4gICAgICAgICAgICAgICAgJChcIiNyZW1vdmVHdWVzdFwiKS5yZW1vdmVDbGFzcyhcImhpZGRlblwiKTtcbiAgICAgICAgICAgICAgICAvLyBEaXR0byBmb3IgdGhlIHN1Ym1pdCBidXR0b24uXG4gICAgICAgICAgICAgICAgJChcIiNzdWJtaXRcIikucmVtb3ZlQ2xhc3MoXCJoaWRkZW5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBhIGd1ZXN0IGlzIGF0dGVuZGluZywgc2hvdyB0aGUgbWVudSBjaG9pY2VzLlxuICAgICAgICAkKFwiI2F0dGVuZFllc1wiKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoXCIjbWVudUNob2ljZVwiKS5yZW1vdmVDbGFzcyhcImhpZGRlblwiKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gSWYgdGhleSBhcmVuJ3QsIGhpZGUgaXQuXG4gICAgICAgICQoXCIjYXR0ZW5kTm9cIikuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKFwiI21lbnVDaG9pY2VcIikuYWRkQ2xhc3MoXCJoaWRkZW5cIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEdlbmVyYXRlIHRoZSBndWVzdCBvYmplY3QuXG4gICAgICAgIGZ1bmN0aW9uIGVudGVyR3Vlc3QoKSB7XG4gICAgICAgICAgICAvLyBUaGlzIGlzIG1vc3RseSBmb3IgYWRkaW5nIGFkZGl0aW9uYWwgZ3Vlc3RzLSBpdCBrZWVwcyB0aGUgZm9jdXMgb24gdGhlIGd1ZXN0IG5hbWUgaW5wdXQuIENvdWxkIGdvIHNvbWV3aGVyZSBlbHNlP1xuICAgICAgICAgICAgJChcIiNuYW1lXCIpLmZvY3VzKCk7XG4gICAgICAgICAgICAvLyBJbml0aWFsaXplIGFuIGVtcHR5IG9iamVjdC5cbiAgICAgICAgICAgIHZhciBndWVzdEVudHJ5ID0ge307XG4gICAgICAgICAgICAvLyBQb3B1bGF0ZSB0aGUgb2JqZWN0IHdpdGggdGhlIHZhbHVlcyBlbnRlcmVkIGluIHRoZSBmb3JtLlxuICAgICAgICAgICAgZ3Vlc3RFbnRyeS5uYW1lID0gJChcIiNuYW1lXCIpLnZhbCgpO1xuICAgICAgICAgICAgZ3Vlc3RFbnRyeS5hdHRlbmQgPSAkKFwiaW5wdXRbbmFtZT13aWxsQXR0ZW5kXTpjaGVja2VkXCIpLnZhbCgpO1xuICAgICAgICAgICAgZ3Vlc3RFbnRyeS5lbnRyZWVUeXBlID0gJChcImlucHV0W25hbWU9ZW50cmVlVHlwZV06Y2hlY2tlZFwiKS52YWwoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdndWVzdEVudHJ5JywgZ3Vlc3RFbnRyeSk7XG4gICAgICAgICAgICAvLyBBZGQgdGhlIGd1ZXN0cyBhcnJheSwgcGFzc2luZyB0aGUgb2JqZWN0IGNyZWF0ZWQgYWJvdmUgYXMgdGhlIGFyZ3VtZW50LlxuICAgICAgICAgICAgYWRkR3Vlc3RFbnRyeShndWVzdEVudHJ5KTtcbiAgICAgICAgICAgIC8vIEFkZCB0aGUgZ3Vlc3QgdG8gdGhlIGRpc3BsYXkgb2YgZW50cmllcy5cbiAgICAgICAgICAgIGRpc3BsYXlDdXJyZW50RW50cmllcygpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWRkIGEgZ3Vlc3QgYnkgY2FsbGluZyBlbnRlckd1ZXN0LCBhbmQgY2xvc2UgdGhlIGRpYWxvZy5cbiAgICAgICAgZnVuY3Rpb24gYWRkR3Vlc3QoKSB7XG4gICAgICAgICAgICBlbnRlckd1ZXN0KCk7XG4gICAgICAgICAgICBkaWFsb2cuZGlhbG9nKFwiY2xvc2VcIik7XG4gICAgICAgICAgICAvLyBUaGlzIHByb2JhYmx5IGRvZXNuJ3QgYmVsb25nIGhlcmUsIGJ1dCBpdCBzZWVtcyB0byB3b3JrLiBJdCBwcmV2ZW50cyB0aGUgZm9sbG93aW5nOiBmaWxsIG91dCBmb3JtLCBjbGljayByZXZpZXcsIGNsaWNrIGFkZCBndWVzdCwgbWVudSBpcyBzdGlsbCBzaG93aW5nLiBXaGljaCBpcyBub3QgYSByZWFsIGJpZyBwcm9ibGVtLCBzaW5jZSBjbGlja2luZyB3aWxsIG5vdCBhdHRlbmQgc3RpbGwgaGlkZXMgdGhlIG1lbnUuXG4gICAgICAgICAgICAkKFwiI21lbnVDaG9pY2VcIikuYWRkQ2xhc3MoXCJoaWRkZW5cIik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZGQgbXVsdGlwbGUgZ3Vlc3RzIHdpdGhvdXQgY2xvc2luZyB0aGUgZGlhbG9nLlxuICAgICAgICBmdW5jdGlvbiBhZGRBbm90aGVyKCkge1xuICAgICAgICAgICAgaWYgKGZvcm1WYWxpZGF0ZSgpKSAge1xuICAgICAgICAgICAgICAgIGVudGVyR3Vlc3QoKTtcbiAgICAgICAgICAgICAgICBmb3JtWzBdLnJlc2V0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUaGUgZGlhbG9nIGJveCBjb250YWluaW5nIHRoZSBmb3JtLlxuICAgICAgICBkaWFsb2cgPSAkKFwiI3JzdnBGb3JtXCIpLmRpYWxvZyh7XG4gICAgICAgICAgICBkaWFsb2dDbGFzczogXCJmb3JtIG5vLWNsb3NlXCIsXG4gICAgICAgICAgICBhdXRvT3BlbjogZmFsc2UsXG4gICAgICAgICAgICBoZWlnaHQ6IFwiYXV0b1wiLFxuICAgICAgICAgICAgd2lkdGg6IDYwMCxcbiAgICAgICAgICAgIG1vZGFsOiB0cnVlLFxuICAgICAgICAgICAgY2xvc2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGZvcm1bMF0ucmVzZXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIExldCdzIGRvIHNvbWUgdmFsaWRhdGluJ1xuXG4gICAgICAgIGZ1bmN0aW9uIGZvcm1WYWxpZGF0ZSgpIHtcbiAgICAgICAgICAgIGlmICgkKFwiI25hbWVcIikudmFsKCkgPT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAkKFwiI25hbWVFcnJvclwiKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgkKFwiaW5wdXRbbmFtZT13aWxsQXR0ZW5kXTpjaGVja2VkXCIpLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgJChcIiN3aWxsQXR0ZW5kRXJyb3JcIikuc2hvdygpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoJChcIiNhdHRlbmRObzpjaGVja2VkXCIpKSB7XG4gICAgICAgICAgICAgICAgJChcIi5mb3JtLWVycm9yXCIpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoJChcImlucHV0W25hbWU9ZW50cmVlVHlwZV06Y2hlY2tlZFwiKS5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgICAgICQoXCIjZW50cmVlVHlwZUVycm9yXCIpLnNob3coKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoXCIuZm9ybS1lcnJvclwiKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZGQgdGhlIGd1ZXN0IGFuZCBjbG9zZSB0aGUgZGlhbG9nLlxuICAgICAgICAkKFwiI3Jldmlld0VudHJpZXNcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChmb3JtVmFsaWRhdGUoKSkgIHtcbiAgICAgICAgICAgICAgICBhZGRHdWVzdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuXG4gICAgICAgICQoXCIjYWRkQW5vdGhlclwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKGd1ZXN0cy5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgICAgICAgICBhZGRHdWVzdCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhZGRBbm90aGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoXCIjY2FuY2VsXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZGlhbG9nLmRpYWxvZyhcImNsb3NlXCIpO1xuICAgICAgICB9KTtcblxuICAgICAgICBmb3JtID0gZGlhbG9nLmZpbmQoXCJmb3JtXCIpLm9uKFwic3VibWl0XCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgYWRkR3Vlc3RFbnRyeSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKFwiI2FkZEd1ZXN0XCIpLmJ1dHRvbigpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBkaWFsb2cuZGlhbG9nKFwib3BlblwiKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJChcIiNyZW1vdmVHdWVzdFwiKS5idXR0b24oKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZ3Vlc3RzLnBvcCgpO1xuICAgICAgICAgICAgZGlzcGxheUN1cnJlbnRFbnRyaWVzKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBtYWlsZ3VuVVJMO1xuXG4gICAgICAgIG1haWxndW5VUkwgPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgKyAnL2Rpc3Qvc2NyaXB0cy9tYWlsZ3VuLnBocCc7XG5cbiAgICAgICAgJChcImZvcm0jc3VibWl0R3Vlc3RzXCIpLnN1Ym1pdChmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAvLyB2YXIganNvbiA9ICQodGhpcykuc2VyaWFsaXplKCk7XG4gICAgICAgICAgICB2YXIganNvbiA9IEpTT04uc3RyaW5naWZ5KGd1ZXN0cyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnanNvbiB0byBzdWJtaXQ6ICcgKyBqc29uKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG1haWxndW5VUkwpO1xuXG4gICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBjYWNoZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgdXJsOiBtYWlsZ3VuVVJMLFxuICAgICAgICAgICAgICAgIGRhdGE6IGpzb24sXG4gICAgICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlU3VjY2VzcyhkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU2lsZW50IGZhaWx1cmUuJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcblxuICAgICAgICB9KTtcblxuICAgICAgICBmdW5jdGlvbiByZXNwb25zZVN1Y2Nlc3MoZGF0YSkge1xuICAgICAgICAgICAgaWYgKGRhdGEuc3RhdHVzID09PSBcInN1Y2Nlc3NcIikge1xuICAgICAgICAgICAgICAgICQoXCIjY3VycmVudEVudHJpZXNcIikuaHRtbChcIlN1Ym1pc3Npb24gc2VudCBzdWNjZXNmdWxseS5cIikucmVtb3ZlQ2xhc3MoXCJmb3JtLXJlc3VsdHNcIik7XG4gICAgICAgICAgICAgICAgJChcIiNzdWJtaXRcIikuYWRkQ2xhc3MoXCJoaWRkZW5cIik7XG4gICAgICAgICAgICAgICAgJChcIiNyZW1vdmVHdWVzdFwiKS5hZGRDbGFzcyhcImhpZGRlblwiKTtcbiAgICAgICAgICAgICAgICAkKFwiI2FkZEd1ZXN0XCIpLmFkZENsYXNzKFwiaGlkZGVuXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKFwiI2N1cnJlbnRFbnRyaWVzXCIpLmh0bWwoXCJTdWJtaXNzaW9uIGZhaWxlZC4gUGxlYXNlIGNvbnRhY3QgdXMgZGlyZWN0bHkgLSBldmVudCBhdCB3aWxsaWFtYW5kbGF1cmEgZG90IHVzXCIpLnJlbW92ZUNsYXNzKFwiZm9ybS1yZXN1bHRzXCIpO1xuICAgICAgICAgICAgICAgICQoXCIjc3VibWl0XCIpLmFkZENsYXNzKFwiaGlkZGVuXCIpO1xuICAgICAgICAgICAgICAgICQoXCIjcmVtb3ZlR3Vlc3RcIikuYWRkQ2xhc3MoXCJoaWRkZW5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH0pO1xuXG59KShqUXVlcnkpO1xuIl0sIm5hbWVzIjpbIlN0cmluZyIsInByb3RvdHlwZSIsImNhcGl0YWxpemVGaXJzdExldHRlciIsInRoaXMiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiJCIsImhpZGUiLCJtYWlsZ3VuVVJMIiwiZ3Vlc3RzIiwiYWRkR3Vlc3RFbnRyeSIsImVudHJ5IiwicHVzaCIsImRpc3BsYXlDdXJyZW50RW50cmllcyIsImxlbmd0aCIsImh0bWwiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiaSIsImxlbiIsInRleHQiLCJhdHRlbmQiLCJuYW1lIiwiZW50cmVlVHlwZSIsImVudGVyR3Vlc3QiLCJmb2N1cyIsImd1ZXN0RW50cnkiLCJ2YWwiLCJjb25zb2xlIiwibG9nIiwiYWRkR3Vlc3QiLCJkaWFsb2ciLCJmb3JtVmFsaWRhdGUiLCJzaG93IiwiY2xpY2siLCJkaWFsb2dDbGFzcyIsImF1dG9PcGVuIiwiaGVpZ2h0Iiwid2lkdGgiLCJtb2RhbCIsImNsb3NlIiwiZm9ybSIsInJlc2V0Iiwib24iLCJmaW5kIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImJ1dHRvbiIsInBvcCIsIndpbmRvdyIsImxvY2F0aW9uIiwicHJvdG9jb2wiLCJob3N0bmFtZSIsInN1Ym1pdCIsImUiLCJqc29uIiwiSlNPTiIsInN0cmluZ2lmeSIsImFqYXgiLCJ0eXBlIiwiY2FjaGUiLCJ1cmwiLCJkYXRhIiwiY29udGVudFR5cGUiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJzdGF0dXMiLCJlcnJvciIsImpRdWVyeSJdLCJtYXBwaW5ncyI6IkFBQ0FBLE9BQU9DLFVBQVVDLHNCQUF3QixXQUNyQyxPQUFPQyxLQUFLQyxPQUFPLEdBQUdDLGNBQWdCRixLQUFLRyxNQUFNLElBSXJELFNBQVVDLEdBRU5BLEVBQUUsV0FDRUEsRUFBRSxlQUFlQyxPQUdqQixJQW1KSUMsRUFuSkFDLEVBQVMsR0FNYixTQUFTQyxFQUFjQyxHQUNuQkYsRUFBT0csS0FBS0QsR0FJaEIsU0FBU0UsSUFDTCxHQUFzQixJQUFsQkosRUFBT0ssT0FFUFIsRUFBRSxtQkFBbUJTLEtBQUssNkNBQTZDQyxZQUFZLGdCQUVuRlYsRUFBRSxnQkFBZ0JXLFNBQVMsVUFFM0JYLEVBQUUsV0FBV1csU0FBUyxjQUNuQixDQUdILElBREEsSUFDS0MsRUFBSSxFQUFHQyxFQUFNVixFQUFPSyxPQUFRTSxFQUFPLEdBQUlGLEVBQUlDLEVBQUtELElBQ3hCLE9BQXJCVCxFQUFPUyxHQUFHRyxPQUNWRCxHQUFRLGdDQUFrQ1gsRUFBT1MsR0FBR0ksS0FBS3JCLHdCQUEwQixzQkFFbkZtQixHQUFRLGdDQUFrQ1gsRUFBT1MsR0FBR0ksS0FBS3JCLHdCQUEwQixlQUFpQlEsRUFBT1MsR0FBR0ssV0FBYSxRQUluSWpCLEVBQUUsbUJBQW1CUyxLQUFLSyxHQUFNSCxTQUFTLGdCQUV6Q1gsRUFBRSxnQkFBZ0JVLFlBQVksVUFFOUJWLEVBQUUsV0FBV1UsWUFBWSxXQWVqQyxTQUFTUSxJQUVMbEIsRUFBRSxTQUFTbUIsUUFFWCxJQUFJQyxFQUFhLEdBRWpCQSxFQUFXSixLQUFPaEIsRUFBRSxTQUFTcUIsTUFDN0JELEVBQVdMLE9BQVNmLEVBQUUsa0NBQWtDcUIsTUFDeERELEVBQVdILFdBQWFqQixFQUFFLGtDQUFrQ3FCLE1BQzVEQyxRQUFRQyxJQUFJLGFBQWNILEdBRTFCaEIsRUFBY2dCLEdBRWRiLElBSUosU0FBU2lCLElBQ0xOLElBQ0FPLE9BQU9BLE9BQU8sU0FFZHpCLEVBQUUsZUFBZVcsU0FBUyxVQXdCOUIsU0FBU2UsSUFDTCxHQUF5QixLQUFyQjFCLEVBQUUsU0FBU3FCLE1BQ1hyQixFQUFFLGNBQWMyQixZQUViLEdBQUkzQixFQUFFLGtDQUFrQ1EsUUFBVSxFQUNyRFIsRUFBRSxvQkFBb0IyQixXQUVuQixDQUFBLEdBQUkzQixFQUFFLHFCQUVULE9BREFBLEVBQUUsZUFBZUMsT0FDVixFQUNKLENBQUEsS0FBSUQsRUFBRSxrQ0FBa0NRLFFBQVUsR0FLckQsT0FEQVIsRUFBRSxlQUFlQyxPQUNWLEVBSlBELEVBQUUsb0JBQW9CMkIsU0F0RzlCcEIsSUFvQ0FQLEVBQUUsY0FBYzRCLE1BQU0sV0FDbEI1QixFQUFFLGVBQWVVLFlBQVksWUFJakNWLEVBQUUsYUFBYTRCLE1BQU0sV0FDakI1QixFQUFFLGVBQWVXLFNBQVMsWUFxQzlCYyxPQUFTekIsRUFBRSxhQUFheUIsT0FBTyxDQUMzQkksWUFBYSxnQkFDYkMsVUFBVSxFQUNWQyxPQUFRLE9BQ1JDLE1BQU8sSUFDUEMsT0FBTyxFQUNQQyxNQUFPLFdBQ0hDLEtBQUssR0FBR0MsV0F5QmhCcEMsRUFBRSxrQkFBa0JxQyxHQUFHLFFBQVMsV0FDeEJYLEtBQ0FGLE1BS1J4QixFQUFFLGVBQWVxQyxHQUFHLFFBQVMsV0FDSCxJQUFsQmxDLEVBQU9LLE9BQ1BnQixJQWhEQUUsTUFDQVIsSUFDQWlCLEtBQUssR0FBR0MsV0FvRGhCcEMsRUFBRSxXQUFXNEIsTUFBTSxXQUNmSCxPQUFPQSxPQUFPLFdBR2xCVSxLQUFPVixPQUFPYSxLQUFLLFFBQVFELEdBQUcsU0FBVSxTQUFTRSxHQUM3Q0EsRUFBTUMsaUJBQ05wQyxNQUdKSixFQUFFLGFBQWF5QyxTQUFTSixHQUFHLFFBQVMsV0FDaENaLE9BQU9BLE9BQU8sVUFHbEJ6QixFQUFFLGdCQUFnQnlDLFNBQVNKLEdBQUcsUUFBUyxXQUNuQ2xDLEVBQU91QyxNQUNQbkMsTUFLSkwsRUFBYXlDLE9BQU9DLFNBQVNDLFNBQVcsS0FBT0YsT0FBT0MsU0FBU0UsU0FBVyw0QkFFMUU5QyxFQUFFLHFCQUFxQitDLE9BQU8sU0FBU0MsR0FDbkNBLEVBQUVSLGlCQUVFUyxFQUFPQyxLQUFLQyxVQUFVaEQsR0FvQjFCLE9BbkJBbUIsUUFBUUMsSUFBSSxtQkFBcUIwQixHQUNqQzNCLFFBQVFDLElBQUlyQixHQUVaRixFQUFFb0QsS0FBSyxDQUNIQyxLQUFNLE9BQ05DLE9BQU8sRUFDUEMsSUFBS3JELEVBQ0xzRCxLQUFNUCxFQUNOUSxZQUFhLGtDQUNiQyxTQUFVLE9BQ1ZDLFFBQVMsU0FBU0gsR0FjRixZQWJJQSxFQWFmSSxRQUNMNUQsRUFBRSxtQkFBbUJTLEtBQUssZ0NBQWdDQyxZQUFZLGdCQUN0RVYsRUFBRSxXQUFXVyxTQUFTLFVBQ3RCWCxFQUFFLGdCQUFnQlcsU0FBUyxVQUMzQlgsRUFBRSxhQUFhVyxTQUFTLFlBRXhCWCxFQUFFLG1CQUFtQlMsS0FBSyxtRkFBbUZDLFlBQVksZ0JBQ3pIVixFQUFFLFdBQVdXLFNBQVMsVUFDdEJYLEVBQUUsZ0JBQWdCVyxTQUFTLFdBcEJ2QlcsUUFBUUMsSUFBSWlDLElBRWhCSyxNQUFPLFNBQVNMLEdBQ1psQyxRQUFRQyxJQUFJLHVCQUliLE1BcExuQixDQXVNR3VDIn0=