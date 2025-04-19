"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import projectsData from "./projects.json"

const TABS = ["Todos", "Residencial", "Corporativo", "Comercial", "Clinicas e Consultórios"]
const ITEMS_PER_PAGE = 9

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export default function VisaoGeralSection() {
  const [activeTab, setActiveTab] = useState("todos")
  const [currentPage, setCurrentPage] = useState(1)

  const PROJECTS = projectsData

  const handleTabChange = (tabValue: string) => {
    setActiveTab(tabValue)
    setCurrentPage(1)
  }

  return (
    <section id="projetos" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Formas que encantam, linhas que marcam. Uma arquitetura viva e autoral
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
            Cada imagem revela a beleza de um projeto feito para ser admirado
            </p>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          {/* <div className="overflow-x-auto pb-2">
            <TabsList className="mb-8 md:mb-12 bg-transparent border-b w-full justify-start rounded-none h-auto p-0 space-x-6 md:space-x-8">
              {TABS.map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab.toLowerCase()}
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-black 
                             data-[state=active]:bg-transparent text-xs md:text-sm pb-2 px-0"
                >
                  {tab}
                </TabsTrigger>
              ))}
            </TabsList>
          </div> */}

          {TABS.map((tab) => {
            const filteredProjects = PROJECTS.filter((proj) =>
              tab.toLowerCase() === "todos"
                ? true
                : proj.category.toLowerCase() === tab.toLowerCase()
            )

            const totalProjects = filteredProjects.length
            const totalPages = Math.ceil(totalProjects / ITEMS_PER_PAGE)
            const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
            const endIndex = startIndex + ITEMS_PER_PAGE
            const projectsToShow = filteredProjects.slice(startIndex, endIndex)

            return (
              <TabsContent key={tab} value={tab.toLowerCase()} className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {projectsToShow.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="relative overflow-hidden rounded-xl card-hover"
                    >
                      <div className="relative aspect-[4/3] w-full overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent 
                        flex flex-col justify-end p-4 md:p-6 rounded-xl"
                      >
                        <p className="text-white font-light text-xs md:text-sm mb-1">
                          {project.subtitle || capitalize(project.category)}
                        </p>
                        <h3 className="text-white text-base md:text-lg font-medium">
                          {project.title}
                        </h3>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {totalPages > 1 && (
                  <div className="flex justify-center gap-2 mt-8">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`px-3 py-1 border ${page === currentPage
                            ? "bg-primary text-white rounded-full"
                            : "bg-white text-black rounded-full"
                          }`}
                      >
                        {page}
                      </button>
                    ))}
                  </div>
                )}
              </TabsContent>
            )
          })}
        </Tabs>
      </div>
    </section>
  )
}
