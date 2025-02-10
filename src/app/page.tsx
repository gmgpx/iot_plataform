"use client"

import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Package, PackageX, TimerReset } from "lucide-react";
import { Bars } from "@/components/chart/Bars";
import Reports from "@/components/reports/reports";
import Line from "@/components/chart/Line";
import LineChart from "@/components/chart/Line";

export default function App() {
  return (
    <div>
      <main className="sm:ml-14 p-4">
      <h1 className="font-semibold text-4xl border-b">Osíris</h1>
      <h2 className="my-2">Bem vindo de volta Admin</h2>

      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl select-none">
                Total de Peças
              </CardTitle>
              <Package className="ml-auto w-5 h-5"/>
            </div>

            <CardDescription>
              Peças produzidas nas últimas 24h
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold">3147 pçs</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl select-none">
                Peças Defeituosas
              </CardTitle>
              <PackageX className="ml-auto w-5 h-5"/>
            </div>

            <CardDescription>
              Total de peças defeituosas nas últimas 24h
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold">117 pçs</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center ">
              <CardTitle className="text-lg sm:text-xl select-none">
                Ciclo de Máquina
              </CardTitle>
              <TimerReset className="ml-auto w-5 h-5"/>
            </div>

            <CardDescription>
              Tempo médio de produção nas últimas 24h 
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold">3,14 seg</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl select-none">
                Tempo de Parada
              </CardTitle>
              <Clock className="ml-auto w-5 h-5"/>
            </div>

            <CardDescription>
              Média entre as paradas de máquina
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold">1h20m</p>
          </CardContent>
        </Card>
      </section>

      <h1 className="my-2 font-semibold text-4xl border-b">Dashboards</h1>
      <h2 className="my-2">Resumo das últimas operações</h2>

      <section className="mt-4 flex flex-col md:flex-row gap-4">
        <Bars />
        <LineChart />
      </section>

      <h1 className="my-2 font-semibold text-4xl border-b">Relatórios</h1>
      <h2 className="my-2">Últimos relatórios gerados</h2>

      <section className="mt-4 flex flex-col md:flex-row gap-4">
        <Reports/>
      </section>
      </main>
    </div>
  );
}
